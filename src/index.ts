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
export interface AspectPropsBase {
  /**
   * The annotation text to use for the annotation.
   */
  readonly annotationText?: string;

  /**
   * The annotation type to use for the annotation.
   */
  readonly annotationType?: AnnotationType;
}

/**
 * The extended aspect properties available only to the base security aspects.
 *
 * These additional properties shouldn't be changed in aspects that already have clearly defined goals.
 * So, this extended properties interface is applied selectively to the base aspects.
 */
export interface AspectPropsExtended extends AspectPropsBase {
  /**
   * The restricted port. Defaults to restricting all ports and only checking sources.
   *
   *
   * @default undefined
   */
  readonly ports?: number[];

  /**
   * The restricted CIDRs for the given port.
   *
   *
   * @default ['0.0.0.0/0', '::/0']
   */
  readonly restrictedCidrs?: string[];

  /**
   * The restricted source security groups for the given port.
   *
   *
   * @default undefined
   */
  readonly restrictedSGs?: string[];

  /**
   * Whether any source is valid. This will ignore all other restrictions and only check the port.
   *
   *
   * @default false
   */
  readonly anySource?: boolean;
}

/**
 * @function anyInRange
 * Function to check if a number is in a range.
 *
 * Useful for determining if a port number in a security group is in part of a range since rules take a to and from port.
 *
 * @param num The number to check.
 * @param from The starting number of the range.
 * @param to The ending number of the range.
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
 * @function annotate
 * Function to annotate a construct node based on a defined annotation type.
 *
 * @param {cdk.IConstruct} node The construct node to annotate.
 * @param {string} annotationText The annotation text to use for the annotation.
 * @param {AnnotationType} annotationType The annotation type to use for the annotation.
 */
export function annotate(node:cdk.IConstruct, annotationText:string | undefined, annotationType:AnnotationType | undefined) {
  annotationText = annotationText || 'A security group rule was blocked by an aspect applied to this stack.';
  annotationType = annotationType || AnnotationType.ERROR;

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
 * The arguments for the checkRules function.
 * Extends the IAspectPropsBase interface which includes additional properties that can be used as args.
 */
export interface RuleCheckArgs extends AspectPropsExtended {
  /**
   * The node to check.
   */
  readonly node: cdk.IConstruct;
}

/**
 * @function checkRules
 *
 * @param {IRuleCheckArgs} args The arguments for the checkRules function.
 *
 * Function to check a node for security group rules and determine if they breaks the rules of a given aspect.
 */
export function checkRules(args: RuleCheckArgs) {
  if (args.node instanceof ec2.CfnSecurityGroup) {
    checkInlineRules(cdk.Stack.of(args.node).resolve(args.node.securityGroupIngress));
  } else if (args.node instanceof ec2.CfnSecurityGroupIngress) {
    checkRule(args.node);
  }

  function checkInlineRules(rules:Array<ec2.CfnSecurityGroup.IngressProperty>) {
    if (rules) {
      for (const rule of rules.values()) {
        checkRule(rule);
      }
    }
  }

  function checkRule(rule: ec2.CfnSecurityGroupIngress | ec2.CfnSecurityGroup.IngressProperty) {
    if (!cdk.Tokenization.isResolvable(rule)) {
      let matchingSource = false;
      let matchingPort = false;
      let shouldAnnotate = false;

      if (args.ports === undefined) {
        matchingPort = true;
      } else if (args.ports && rule.fromPort && rule.toPort && anyInRange(args.ports, rule.fromPort, rule.toPort)) {
        matchingPort = true;
      }

      if (rule.cidrIp) {
        if (args.anySource) {
          matchingSource = true;
        }
        if (args.anySource == false && args.restrictedCidrs !== undefined && args.restrictedCidrs.includes(rule.cidrIp)) {
          matchingSource = true;
        }
        if (matchingSource && matchingPort) {
          shouldAnnotate = true;
        }
      }
      if (rule.sourceSecurityGroupId) {
        if (args.anySource) {
          matchingSource = true;
        }
        if (args.anySource == false && args.restrictedSGs !== undefined && args.restrictedSGs.includes(rule.sourceSecurityGroupId)) {
          matchingSource = true;
        }
        if (matchingSource && matchingPort) {
          shouldAnnotate = true;
        }
      }

      if (shouldAnnotate) {
        annotate(args.node, args.annotationText, args.annotationType);
      }
    }
  }
}

/**
 * The base class for all security group aspects in the library.
 *
 * By default this will not restrict anything.
 */
export class SecurityGroupAspectBase implements cdk.IAspect {
  public annotationText: string;
  public annotationType: AnnotationType;
  public ports: number[] | undefined;
  public restrictedCidrs: string[] | undefined;
  public restrictedSGs: string[] | undefined;
  public anySource: boolean;

  constructor(props?: AspectPropsExtended) {
    this.annotationType = props?.annotationType ?? AnnotationType.ERROR;
    this.annotationText = props?.annotationText ?? 'A security group rule was blocked by an aspect applied to this stack.';
    this.ports = props?.ports;
    this.restrictedCidrs = props?.restrictedCidrs;
    this.restrictedSGs = props?.restrictedSGs;
    this.anySource = props?.anySource ?? false;
  }

  public visit(node: cdk.IConstruct) {
    checkRules({
      node,
      annotationText: this.annotationText,
      annotationType: this.annotationType,
      ports: this.ports,
      restrictedCidrs: this.restrictedCidrs,
      restrictedSGs: this.restrictedSGs,
      anySource: this.anySource,
    });
  }
}

/**
 * The base aspect to determine if a security group allows inbound traffic from the public internet to any port.
 *
 * This inherits everything from the base SecurityGroupAspectBase class and sets a default set of CIDRS that match allowing all IPs on AWS.
 */
export class NoPublicIngressAspectBase extends SecurityGroupAspectBase implements cdk.IAspect {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.restrictedCidrs = ['0.0.0.0/0', '::/0'];
  }
}

/**
 * The same as the base NoPublicIngressAspectBase but with a more descriptive annotation.
 *
 * Blocks the ANY port from the public internet.
 */
export class NoPublicIngressAspect extends NoPublicIngressAspectBase implements cdk.IAspect {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.annotationText = props?.annotationText ?? 'NoPublicIngressAspect: A security group rule allows public access to a restricted port: All ports restricted).';
  }
}

/**
 * Aspect to determine if a security group allows inbound traffic from the public internet to the SSH port.
 */
export class NoPublicIngressSSHAspect extends NoPublicIngressAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.annotationText = props?.annotationText ?? 'NoPublicIngressSSHAspect: A security group rule allows access to a restricted port from public IPs (0.0.0.0/0): 22 (SSH)';
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
  constructor(props?: AspectPropsBase) {
    super(props);

    this.annotationText = 'CIS AWS Foundations Benchmark 4.1: Ensure no security groups allow ingress from 0.0.0.0/0 to port 22';
  }
}

/**
 * Aspect to determine if a security group allows inbound traffic from the public internet to the RDP port.
 */
export class NoPublicIngressRDPAspect extends NoPublicIngressAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.annotationText = props?.annotationText ?? 'NoPublicIngressRDPAspect: A security group rule allows access to a restricted port from public IPs (0.0.0.0/0): 3389 (RDP)';
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
  constructor(props?: AspectPropsBase) {
    super(props);

    this.annotationText = 'CIS AWS Foundations Benchmark 4.2: Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389';
  }
}

/**
 * Restricted common ports based on AWS Config rule https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html
 */
export class AWSRestrictedCommonPortsAspect extends NoPublicIngressAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      20,
      21,
      3389,
      3306,
      4333,
    ];
    this.annotationText = props?.annotationText ?? 'AWSRestrictedCommonPortsAspect: A security group rule allows access to a restricted port from public IPs (0.0.0.0/0): 20, 21, 3389, 3306, 4333';
  }
}

/**
 * Aspect to restrict public access to common management ports.
 *
 * 22 - SSH
 * 3389 - RDP
 * 5985 - WinRM
 * 5986 - WinRM HTTPS
 */
export class NoPublicIngressCommonManagementPortsAspect extends NoPublicIngressAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      22,
      3389,
      5985,
      5986,
    ];
    this.annotationText = props?.annotationText ?? 'NoPublicIngressCommonManagementPortsAspect: A security group rule allows access to a restricted port from public IPs (0.0.0.0/0): 22, 3389, 5985, 5986';
  }
}

/**
 * Aspect to restrict any access to common management ports.
 *
 * 22 - SSH
 * 3389 - RDP
 * 5985 - WinRM
 * 5986 - WinRM HTTPS
 */
export class NoIngressCommonManagementPortsAspect extends SecurityGroupAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      22,
      3389,
      5985,
      5986,
    ];
    this.annotationText = props?.annotationText ?? 'NoIngressCommonManagementPortsAspect: A security group rule allows access to a restricted port: 22, 3389, 5985, 5986';
    this.anySource = true;
  }
}

/**
 * Aspect to restrict public access to common relational DB ports.
 *
 * 3306 - MySQL
 * 5432 - PostgreSQL
 * 1521 - Oracle
 * 1433 - SQL Server
 */
export class NoPublicIngressCommonRelationalDBPortsAspect extends NoPublicIngressAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      3306,
      5432,
      1521,
      1433,
    ];
    this.annotationText = props?.annotationText ?? 'NoPublicIngressCommonRelationalDBPortsAspect: A security group rule allows access to a restricted port from public IPs (0.0.0.0/0): 3306, 5432, 1521, 1433';
  }
}

/**
 * Aspect to restrict any access to common relational DB ports.
 *
 * 3306 - MySQL
 * 5432 - PostgreSQL
 * 1521 - Oracle
 * 1433 - SQL Server
 */
export class NoIngressCommonRelationalDBPortsAspect extends SecurityGroupAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      3306,
      5432,
      1521,
      1433,
    ];
    this.annotationText = props?.annotationText ?? 'NoIngressCommonRelationalDBPortsAspect: A security group rule allows access to a restricted port: 3306, 5432, 1521, 1433';
    this.anySource = true;
  }
}

/**
 * Aspect to restrict public access to common web ports.
 *
 * 80 - HTTP
 * 443 - HTTPS
 * 8080 - HTTP
 * 8443 - HTTPS
 */
export class NoPublicIngressCommonWebPortsAspect extends NoPublicIngressAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      80,
      443,
      8080,
      8443,
    ];
    this.annotationText = props?.annotationText ?? 'NoPublicIngressCommonWebPortsAspect: A security group rule allows access to a restricted port from public IPs (0.0.0.0/0): 80, 443, 8080, 8443';
  }
}

/**
 * Aspect to restrict any access to common web ports.
 *
 * 80 - HTTP
 * 443 - HTTPS
 * 8080 - HTTP
 * 8443 - HTTPS
 */
export class NoIngressCommonWebPortsAspect extends SecurityGroupAspectBase {
  constructor(props?: AspectPropsBase) {
    super(props);

    this.ports = [
      80,
      443,
      8080,
      8443,
    ];
    this.annotationText = props?.annotationText ?? 'NoIngressCommonWebPortsAspect: A security group rule allows access to a restricted port: 80, 443, 8080, 8443';
    this.anySource = true;
  }
}
