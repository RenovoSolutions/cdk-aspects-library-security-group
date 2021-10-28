# API Reference <a name="API Reference"></a>



## Classes <a name="Classes"></a>

### AWSRestrictedCommonPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect"></a>

Restricted common ports based on AWS Config rule https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.Initializer"></a>

```typescript
import { AWSRestrictedCommonPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new AWSRestrictedCommonPortsAspect(props?: IAspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

---





### CISAwsFoundationBenchmark4Dot1Aspect <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect"></a>

CIS AWS Foundations Benchmark 4.1.

CIS recommends that no security group allow unrestricted ingress access to port 22. Removing unfettered connectivity to remote console services, such as SSH, reduces a server's exposure to risk.

This aspect uses the NoPublicIngressSSHAspect with an alternate annotation text.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.Initializer"></a>

```typescript
import { CISAwsFoundationBenchmark4Dot1Aspect } from '@renovosolutions/cdk-aspects-library-security-group'

new CISAwsFoundationBenchmark4Dot1Aspect(props?: IAspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

---





### CISAwsFoundationBenchmark4Dot2Aspect <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect"></a>

CIS AWS Foundations Benchmark 4.2.

CIS recommends that no security group allow unrestricted ingress access to port 3389. Removing unfettered connectivity to remote console services, such as RDP, reduces a server's exposure to risk.

This aspect uses the NoPublicIngressRDPAspect with an alternate annotation text.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.Initializer"></a>

```typescript
import { CISAwsFoundationBenchmark4Dot2Aspect } from '@renovosolutions/cdk-aspects-library-security-group'

new CISAwsFoundationBenchmark4Dot2Aspect(props?: IAspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

---





### NoPublicIngressAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

Aspect to determine if a security group allows inbound traffic from the public internet to any port.

This inherits everything from the base SecurityGroupAspectBase class and modifies the default annotation text.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.Initializer"></a>

```typescript
import { NoPublicIngressAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressAspect(props?: IAspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

---





### NoPublicIngressRDPAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect"></a>

Aspect to determine if a security group allows inbound traffic from the public internet to the RDP port.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.Initializer"></a>

```typescript
import { NoPublicIngressRDPAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressRDPAspect(props?: IAspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

---





### NoPublicIngressSSHAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect"></a>

Aspect to determine if a security group allows inbound traffic from the public internet to the SSH port.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.Initializer"></a>

```typescript
import { NoPublicIngressSSHAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressSSHAspect(props?: IAspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

---





### SecurityGroupAspectBase <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

The base class for all security group aspects in the library.

By default this will restrict all ports that use the typical "any" CIDRs on AWS (0.0.0.0/0 and ::/0) and
will generate an error in the CDK metadata with a generic error about a blocked security group rule.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.Initializer"></a>

```typescript
import { SecurityGroupAspectBase } from '@renovosolutions/cdk-aspects-library-security-group'

new SecurityGroupAspectBase(props?: IAspectPropsExtended)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended)

---

#### Methods <a name="Methods"></a>

##### `visit` <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.visit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---


#### Properties <a name="Properties"></a>

##### `annotationText`<sup>Required</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

---

##### `annotationType`<sup>Required</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

---

##### `anySource`<sup>Required</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* `boolean`

---

##### `ports`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* `number`[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* `string`[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* `string`[]

---


## Protocols <a name="Protocols"></a>

### IAspectPropsBase <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase"></a>

- *Implemented By:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase), [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended), [`@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs`](#@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs)

The base aspect properties available to any aspect.

JSII doesn't support an Omit when extending interfaces, so we create a base class to extend from.
This base class meets the needed properties for all non-base aspects.


#### Properties <a name="Properties"></a>

##### `annotationText`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

The annotation type to use for the annotation.

---

### IAspectPropsExtended <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended"></a>

- *Extends:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsBase)

- *Implemented By:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended), [`@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs`](#@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs)

The extended aspect properties available only to the SecurityGroupAspectBase.

These additional properties shouldn't be changed in aspects that already have clearly defined goals.
So, this extended properties interface is applied selectively to the SecurityGroupAspectBase.


#### Properties <a name="Properties"></a>

##### `annotationText`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

The annotation type to use for the annotation.

---

##### `anySource`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether any source is valid.

This will ignore all other restrictions and only check the port.

---

##### `ports`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* `number`[]
- *Default:* undefined

The restricted port.

Defaults to restricting all ports and only checking sources.

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* `string`[]
- *Default:* ['0.0.0.0/0', '::/0']

The restricted CIDRs for the given port.

---

##### `restrictedSGs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* `string`[]
- *Default:* undefined

The restricted source security groups for the given port.

---

### IRuleCheckArgs <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs"></a>

- *Extends:* [`@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended`](#@renovosolutions/cdk-aspects-library-security-group.IAspectPropsExtended)

- *Implemented By:* [`@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs`](#@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs)

The arguments for the checkRules function.

Extends the IAspectPropsBase interface which includes additional properties that can be used as args.


#### Properties <a name="Properties"></a>

##### `annotationText`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

The annotation type to use for the annotation.

---

##### `anySource`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether any source is valid.

This will ignore all other restrictions and only check the port.

---

##### `ports`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* `number`[]
- *Default:* undefined

The restricted port.

Defaults to restricting all ports and only checking sources.

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* `string`[]
- *Default:* ['0.0.0.0/0', '::/0']

The restricted CIDRs for the given port.

---

##### `restrictedSGs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* `string`[]
- *Default:* undefined

The restricted source security groups for the given port.

---

##### `node`<sup>Required</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.IRuleCheckArgs.property.node"></a>

```typescript
public readonly node: IConstruct;
```

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

The node to check.

---

## Enums <a name="Enums"></a>

### AnnotationType <a name="AnnotationType"></a>

The supported annotation types.

Only error will stop deployment of restricted resources.

#### `WARNING` <a name="@renovosolutions/cdk-aspects-library-security-group.AnnotationType.WARNING"></a>

---


#### `ERROR` <a name="@renovosolutions/cdk-aspects-library-security-group.AnnotationType.ERROR"></a>

---


#### `INFO` <a name="@renovosolutions/cdk-aspects-library-security-group.AnnotationType.INFO"></a>

---

