import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

/**
 * The supported annotation types. Only error will stop deployment of restricted resources.
 */
export enum AnnotationType {
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info'
};

/**
 * The base aspect properties available to any aspect.
 *
 * JSII doesn't support an Omit when extending interfaces, so we create a base class to extend from.
 * This base class meets the needed properties for all non-base aspects.
 */
export interface IAspectPropsBase {
  /**
   * The annotation text to use for the annotation.
   */
  annotationText?: string;

  /**
   * The annotation type to use for the annotation.
   */
  annotationType?: AnnotationType;
}

/**
 * The extended aspect properties available only to the SecurityGroupAspectBase.
 *
 * These additional properties shouldn't be changed in aspects that already have clearly defined goals.
 * So, this extended properties interface is applied selectively to the SecurityGroupAspectBase.
 */
export interface IAspectPropsExtended extends IAspectPropsBase {
  /**
   * The restricted port. Defaults to all ports.
   *
   *
   * @default undefined
   */
  ports?: number[];

  /**
   * The restricted CIDRs for the given port.
   *
   *
   * @default ['0.0.0.0/0', '::/0']
   */
  restrictedCidrs?: string[];
}

/**
 * Function to check if a number is in a range.
 *
 * Useful for determining if a port number in a security group is in part of a range since rules take a to and from port.
 */
export function anyInRange(num: number[], from: number, to: number) {
  for (const n of num) {
    if (n >= from && n <= to) {
      return true;
    }
  }
  return false;
}

/**
 * Function to annotate a node based on a defined annotation type.
 */
export function annotate(node:cdk.IConstruct, annotationText:string, annotationType:AnnotationType) {
  switch (annotationType) {
    case 'error':
      cdk.Annotations.of(node).addError(annotationText);
      break;
    case 'warning':
      cdk.Annotations.of(node).addWarning(annotationText);
      break;
    case 'info':
      cdk.Annotations.of(node).addInfo(annotationText);
      break;
  }
}

/**
 * Function to check a node for security group rules and determine if they breaks the rules of a given aspect.
 */
function checkRules(
  node: cdk.IConstruct,
  restrictedCidrs:string[],
  annotationText:string,
  annotationType:AnnotationType,
  ports:number[] | undefined,
) {
  if (node instanceof ec2.CfnSecurityGroup) {
    checkInlineRules(cdk.Stack.of(node).resolve(node.securityGroupIngress));
  } else if (node instanceof ec2.CfnSecurityGroupIngress) {
    checkRule(node);
  }

  function checkInlineRules(rules:Array<ec2.CfnSecurityGroup.IngressProperty>) {
    if (rules) {
      for (const rule of rules.values()) {
        if (rule.cidrIp && rule.fromPort && rule.toPort && ports !== undefined) { // annotation for port sensitive rules
          if (!cdk.Tokenization.isResolvable(rule) && restrictedCidrs.includes(rule.cidrIp) && anyInRange(ports, rule.fromPort, rule.toPort)) {
            annotate(node, annotationText, annotationType);
          }
        } else { // annotation for non-port sensitive rules
          if (!cdk.Tokenization.isResolvable(rule) && (rule.cidrIp && restrictedCidrs.includes(rule.cidrIp)) && ports === undefined) {
            annotate(node, annotationText, annotationType);
          }
        }
      }
    }
  }

  function checkRule(rule: ec2.CfnSecurityGroupIngress) {
    if (rule.cidrIp && rule.fromPort && rule.toPort && ports !== undefined) { // annotation for port sensitive rules
      if (!cdk.Tokenization.isResolvable(rule) && restrictedCidrs.includes(rule.cidrIp) && anyInRange(ports, rule.fromPort, rule.toPort)) {
        annotate(node, annotationText, annotationType);
      }
    } else { // annotation for non-port sensitive rules
      if (!cdk.Tokenization.isResolvable(rule) && (rule.cidrIp && restrictedCidrs.includes(rule.cidrIp)) && ports === undefined) {
        annotate(node, annotationText, annotationType);
      }
    }
  }
}

/**
 * The base class for all security group aspects in the library.
 *
 * By default this will restrict all ports that use the typical "any" CIDRs on AWS (0.0.0.0/0 and ::/0) and
 * will generate an error in the CDK metadata with a generic error about a blocked security group rule.
 */
export class SecurityGroupAspectBase implements cdk.IAspect {
  public annotationText: string;
  public annotationType: AnnotationType;
  public ports: number[] | undefined;
  public restrictedCidrs: string[];

  constructor(props?: IAspectPropsExtended) {
    this.annotationType = props?.annotationType ?? AnnotationType.ERROR;
    this.annotationText = props?.annotationText ?? 'A security group rule was blocked by an aspect applied to this stack.';
    this.ports = props?.ports;
    this.restrictedCidrs = props?.restrictedCidrs ?? ['0.0.0.0/0', '::/0'];
  }

  public visit(node: cdk.IConstruct) {
    checkRules(
      node,
      this.restrictedCidrs,
      this.annotationText,
      this.annotationType,
      this.ports,
    );
  }
}

/**
 * Aspect to determine if a security group allows inbound traffic from the public internet to any port.
 *
 * This inherits everything from the base SecurityGroupAspectBase class and modifies the default annotation text.
 */
export class NoPublicIngressAspect extends SecurityGroupAspectBase implements cdk.IAspect {
  constructor(props?: IAspectPropsBase) {
    super(props);

    this.annotationText = props?.annotationText ?? 'NoPublicIngressAspect: A security group rule allows public access to a restricted port: All ports restricted).';
  }
}

/**
 * Aspect to determine if a security group allows inbound traffic from the public internet to the SSH port.
 */
export class NoPublicIngressSSHAspect extends SecurityGroupAspectBase {
  constructor(props?: IAspectPropsBase) {
    super(props);

    this.annotationText = props?.annotationText ?? 'NoPublicIngressSSHAspect: A security group rule allows public access to a restricted port: 22 (SSH)';
    this.ports = [22];
  }
}

/**
 * CIS AWS Foundations Benchmark 4.1
 *
 * CIS recommends that no security group allow unrestricted ingress access to port 22. Removing unfettered connectivity to remote console services, such as SSH, reduces a server's exposure to risk.
 *
 * This aspect uses the NoPublicIngressSSHAspect with an alternate annotation text.
 */
export class CISAwsFoundationBenchmark4Dot1Aspect extends NoPublicIngressSSHAspect {
  constructor(props?: IAspectPropsBase) {
    super(props);

    this.annotationText = 'CIS AWS Foundations Benchmark 4.1: Ensure no security groups allow ingress from 0.0.0.0/0 to port 22';
  }
}

/**
 * Aspect to determine if a security group allows inbound traffic from the public internet to the RDP port.
 */
export class NoPublicIngressRDPAspect extends SecurityGroupAspectBase {
  constructor(props?: IAspectPropsBase) {
    super(props);

    this.annotationText = props?.annotationText ?? 'NoPublicIngressRDPAspect: A security group rule allows public access to a restricted port: 3389 (RDP)';
    this.ports = [3389];
  }
}

/**
 * CIS AWS Foundations Benchmark 4.2
 *
 * CIS recommends that no security group allow unrestricted ingress access to port 3389. Removing unfettered connectivity to remote console services, such as RDP, reduces a server's exposure to risk.
 *
 * This aspect uses the NoPublicIngressRDPAspect with an alternate annotation text.
 */
export class CISAwsFoundationBenchmark4Dot2Aspect extends NoPublicIngressRDPAspect {
  constructor(props?: IAspectPropsBase) {
    super(props);

    this.annotationText = 'CIS AWS Foundations Benchmark 4.2: Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389';
  }
}

/**
 * Restricted common ports based on AWS Config rule https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html
 */
export class AWSRestrictedCommonPortsAspect extends SecurityGroupAspectBase {
  constructor(props?: IAspectPropsBase) {
    super(props);

    this.ports = [
      20,
      21,
      3389,
      3306,
      4333,
    ];
    this.annotationText = props?.annotationText ?? 'AWSRestrictedCommonPortsAspect: A security group rule allows access to a restricted port: 20, 21, 3389, 3306, 4333';
  }
}
