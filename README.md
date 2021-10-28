# cdk-aspects-library-security-group

A CDK library containing EC2 security group related [CDK Aspects](https://docs.aws.amazon.com/cdk/latest/guide/aspects.html) and the ability to define custom aspects.

## Features
- Utilize built in aspects for common cases:
  - Disallow public access to any port
  - Disallow public access to AWS Restricted Common ports ([per the AWS Config rule](https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html))
  - Disallow public access to SSH or RDP per CIS Benchmark guidelines and general good practice
- Create any other aspect using the base security group aspect class.
- By default aspects generate errors in the CDK metadata which the deployment or synth process will find, but this can be changed with the `annotationType` property
- All default provided aspects restrict based on the public access CIDRs (`0.0.0.0/0` and `::/0`) but you can also defined aspects with any set of restricted CIDRs or security group IDs you like

## API Doc
See [API](API.md)

## Examples
### Typescript
```
// Add an existing aspect to your stack
Aspects.of(stack).add(new NoPublicIngressAspect());

// Add a custom aspect to your stack
Aspects.of(stack).add(new SecurityGroupAspectBase({
  annotationText: 'This is a custom message warning you how you should not do what you are doing.',
  annotationType: AnnotationType.WARNING,
  ports: [5985],
  restrictedCidrs: ['10.1.0.0/16'],
}));

// Change an existing aspects message and type
Aspects.of(stack).add(new NoPublicIngressAspect(
  annotationText: 'This is custom text.',
  annotationType: AnnotationType.WARNING
));
```
