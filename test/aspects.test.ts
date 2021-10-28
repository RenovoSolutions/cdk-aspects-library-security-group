import { readFileSync } from 'fs';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

import {
  SecurityGroupAspectBase,
  NoPublicIngressAspect,
  anyInRange,
  AnnotationType,
  CISAwsFoundationBenchmark4Dot1Aspect,
  CISAwsFoundationBenchmark4Dot2Aspect,
  AWSRestrictedCommonPortsAspect,
  NoPublicIngressSSHAspect,
  NoPublicIngressRDPAspect,
} from '../src/index';

function otherStackSg(app:cdk.App) {
  const stack = new cdk.Stack(app, 'TestSgStack');

  const sg = new ec2.SecurityGroup(stack, 'SecurityGroup', {
    vpc: new ec2.Vpc(stack, 'VPC', {
      maxAzs: 0,
      natGateways: 0,
      subnetConfiguration: [{
        cidrMask: 24,
        name: 'Public',
        subnetType: ec2.SubnetType.PUBLIC,
      }],
    }),
    allowAllOutbound: true,
  });

  return sg;
}

function testSetup(app:cdk.App, source:ec2.IPeer, port:ec2.Port, disableInlineRules:boolean = false) {
  const stack = new cdk.Stack(app, 'TestStack');

  const sg = new ec2.SecurityGroup(stack, 'SecurityGroup', {
    vpc: new ec2.Vpc(stack, 'VPC', {
      maxAzs: 0,
      natGateways: 0,
      subnetConfiguration: [{
        cidrMask: 24,
        name: 'Public',
        subnetType: ec2.SubnetType.PUBLIC,
      }],
    }),
    allowAllOutbound: true,
    disableInlineRules,
  });

  sg.addIngressRule(source, port, 'Test blocked rule');

  let ruleId:string = 'Resource';
  sg.node.children.forEach( (child) => {
    if (child instanceof ec2.CfnSecurityGroupIngress && child.description == 'Test blocked rule') {
      ruleId = child.node.id;
    }
  });

  return {
    app: app,
    stack: stack,
    sg: sg,
    ruleId: ruleId,
  };
}

function getMetadataAnnotations(app:cdk.App, ruleId:string, expectedType:string) {
  app.synth();

  let errors:string[] = [];

  let manifestData = readFileSync(app._assemblyBuilder.assetOutdir + '/manifest.json', 'utf8');

  JSON.parse(manifestData).artifacts.TestStack.metadata['/TestStack/SecurityGroup/' + ruleId].forEach( (e:any) => {
    if (e.type == expectedType) {
      errors.push(e.data);
    }
  });

  return errors;
}

function expectedMsgMatchMsgs(expectedMsg:string, msgs:string[]) {
  // if msgs is empty return false
  if (msgs.length == 0) {
    return false;
  } else {
    return msgs.indexOf(expectedMsg) > -1;
  }
}

enum MsgTypes {
  ERROR = 'aws:cdk:error',
  WARNING = 'aws:cdk:warning',
  INFO = 'aws:cdk:info'
}

interface testAspectProps {
  /**
   * The source for the created test rule within the test security group
   */
  source:ec2.IPeer;
  /**
   * The port the test rule will be created within the test security group
   */
  port:ec2.Port;
  /**
   * The expected annotation message that will be returned by the aspect
   */
  expectedMsg:string;
  /**
   * The expected type of the message
   *
   *
   * @default MsgTypes.ERROR
   */
  expectedType?:MsgTypes;
  /**
   * Whether or not the created security group should disable inline rules
   *
   *
   * @default false
   */
  disableInlineRules?:boolean;
  /**
   * Expected result of the test
   *
   *
   * @default true
   */
  expectedResult?:boolean;
}

function testAspect(app:cdk.App, aspect:SecurityGroupAspectBase, props:testAspectProps) {
  props.disableInlineRules = props.disableInlineRules ?? false;
  props.expectedType = props.expectedType ?? MsgTypes.ERROR;
  props.expectedResult = props.expectedResult ?? true;

  let setup = testSetup(app, props.source, props.port, props.disableInlineRules);

  cdk.Aspects.of(setup.stack).add(aspect);

  let errors = getMetadataAnnotations(setup.app, setup.ruleId, props.expectedType);

  expect(expectedMsgMatchMsgs(props.expectedMsg, errors)).toBe(props.expectedResult);
}

test('Expect isInRange to return false if port is NOT in range', () => {
  expect(anyInRange([22, 80], 81, 85)).toBe(false);
});

test('Expect isInRange to return true if port is in range', () => {
  expect(anyInRange([22, 82], 81, 85)).toBe(true);
});

test('A port open to the public (inline rules enabled) should generate a metadata error when NoPublicIngressAspect is applied with defaults', () => {
  const aspect = new NoPublicIngressAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(20),
    expectedMsg: aspect.annotationText,
  });
});

test('A port open to the public should generate a metadata warning when NoPublicIngressAspect is applied with warning type', () => {
  const aspect = new NoPublicIngressAspect({
    annotationType: AnnotationType.WARNING,
  });

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(20),
    expectedMsg: aspect.annotationText,
    expectedType: MsgTypes.WARNING,
  });
});

test('A port open to the public should generate metadata info when NoPublicIngressAspect is applied with info type', () => {
  const aspect = new NoPublicIngressAspect({
    annotationType: AnnotationType.INFO,
  });

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(20),
    expectedMsg: aspect.annotationText,
    expectedType: MsgTypes.INFO,
  });
});

test('A port open to the public (inline rules disabled) should generate a metadata error when NoPublicIngressAspect is applied with defaults', () => {
  const aspect = new NoPublicIngressAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(20),
    expectedMsg: aspect.annotationText,
    disableInlineRules: true,
  });
});

test('A port open to the public (inline rules disabled) should generate a metadata error when a port specific aspect that it matches is applied', () => {
  const aspect = new NoPublicIngressSSHAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(22),
    expectedMsg: aspect.annotationText,
    disableInlineRules: true,
  });
});

test('Port 22 open to the public should generate an error when NoPublicSSHAspect is applied with defaults', () => {
  const aspect = new NoPublicIngressSSHAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(22),
    expectedMsg: aspect.annotationText,
  });
});

test('Port 22 open to the public as part of a range should generate an error when NoPublicSSHAspect is applied with defaults', () => {
  const aspect = new NoPublicIngressSSHAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcpRange(10, 30),
    expectedMsg: aspect.annotationText,
  });
});

test('Port 3389 open to the public should generate an error when NoPublicRDPAspect is applied with defaults', () => {
  const aspect = new NoPublicIngressRDPAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(3389),
    expectedMsg: aspect.annotationText,
  });
});

test('Port 80 open to the public should generate no errors when a port specific aspect is applied with defaults', () => {
  const aspect = new NoPublicIngressSSHAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(80),
    expectedMsg: aspect.annotationText,
    expectedResult: false,
  });
});

test('Port 22 open to the public should generate an error when CISAwsFoundationBenchmark4Dot1Aspect is applied with defaults', () => {
  const aspect = new CISAwsFoundationBenchmark4Dot1Aspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(22),
    expectedMsg: aspect.annotationText,
  });
});

test('Port 3389 open to the public should generate an error when CISAwsFoundationBenchmark4Dot2Aspect is applied with defaults', () => {
  const aspect = new CISAwsFoundationBenchmark4Dot2Aspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(3389),
    expectedMsg: aspect.annotationText,
  });
});

test('Modifying the annotation text should result in the expected text appearing in the metadata', () => {
  const aspect = new NoPublicIngressSSHAspect(
    {
      annotationText: 'This is a modified message about how you cant make a rule that lets everyone in your servers.',
    },
  );

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(22),
    expectedMsg: aspect.annotationText,
  });
});

test('A custom aspect using the base aspect class should create the expected annotation', () => {
  const aspect = new SecurityGroupAspectBase({
    annotationText: 'This is a custom warning about a custom aspect.',
    annotationType: AnnotationType.WARNING,
    ports: [5985],
    restrictedCidrs: ['10.1.0.0/16'],
  });

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.ipv4('10.1.0.0/16'),
    port: ec2.Port.tcp(5985),
    expectedMsg: aspect.annotationText,
    expectedType: MsgTypes.WARNING,
  });
});

test('Port 20 open to the public should generate an error when AWSRestrictedCommonPortsAspect is applied with defaults', () => {
  const aspect = new AWSRestrictedCommonPortsAspect();

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.anyIpv4(),
    port: ec2.Port.tcp(20),
    expectedMsg: aspect.annotationText,
  });
});

test('When anySource is true for an aspect a port matching the aspect generates an error regardless of source.', () => {
  const aspect = new SecurityGroupAspectBase({
    annotationText: 'This is a custom error message letting you know that no source is allowed access to that port.',
    ports: [5985],
    anySource: true,
  });

  testAspect(new cdk.App(), aspect, {
    source: ec2.Peer.ipv4('10.1.0.0/16'),
    port: ec2.Port.tcp(5985),
    expectedMsg: aspect.annotationText,
  });
});

test('When an aspect restricts a security group and a rule uses that source security group an error is created', () => {
  let app = new cdk.App();
  let sourceSg = otherStackSg(app);

  const aspect = new SecurityGroupAspectBase({
    annotationText: 'This is a custom error message for a restricted security group.',
    ports: [5985],
    restrictedSGs: [sourceSg.securityGroupId],
  });

  testAspect(app, aspect, {
    source: sourceSg,
    port: ec2.Port.tcp(5985),
    expectedMsg: aspect.annotationText,
  });
});

test('When an aspect restricts a port with any source and a rule uses a source security group an error is created', () => {
  let app = new cdk.App();
  let sourceSg = otherStackSg(app);

  const aspect = new SecurityGroupAspectBase({
    annotationText: 'This is a custom error message for a restricted port from any source.',
    ports: [5985],
    anySource: true,
  });

  testAspect(app, aspect, {
    source: sourceSg,
    port: ec2.Port.tcp(5985),
    expectedMsg: aspect.annotationText,
  });
});

test('When an aspect restricts a port with a cidr source and a rule uses a source security group no error is created', () => {
  let app = new cdk.App();
  let sourceSg = otherStackSg(app);

  const aspect = new SecurityGroupAspectBase({
    annotationText: 'This is a custom error message for a restricted port for public internet.',
    ports: [5985],
  });

  testAspect(app, aspect, {
    source: sourceSg,
    port: ec2.Port.tcp(5985),
    expectedMsg: aspect.annotationText,
    expectedResult: false,
  });
});
