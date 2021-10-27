# cdk-aspects-library-security-group

A CDK library containing EC2 security group related [CDK Aspects](https://docs.aws.amazon.com/cdk/latest/guide/aspects.html) and the ability to define custom aspects.

## Features
- Utilize built in aspects for common cases:
  - Disallow public access to any port
  - Disallow public access to AWS Restricted Common ports ([per the AWS Config rule](https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html))
  - Disallow public access to SSH or RDP per CIS Benchmark guidelines and general good practice
- Create any other aspect using the base security group aspect class.

## API Doc
See [API](API.md)

## Examples
### Typescript
```
// Add the aspect to your stack
Aspects.of(stack).add(new NoPublicIngressAspect());
```
