# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### AspectPropsBase <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase"></a>

The base aspect properties available to any aspect.

JSII doesn't support an Omit when extending interfaces, so we create a base class to extend from.
This base class meets the needed properties for all non-base aspects.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AspectPropsBase } from '@renovosolutions/cdk-aspects-library-security-group'

const aspectPropsBase: AspectPropsBase = { ... }
```

##### `annotationText`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

The annotation type to use for the annotation.

---

### AspectPropsExtended <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended"></a>

The extended aspect properties available only to the base security aspects.

These additional properties shouldn't be changed in aspects that already have clearly defined goals.
So, this extended properties interface is applied selectively to the base aspects.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AspectPropsExtended } from '@renovosolutions/cdk-aspects-library-security-group'

const aspectPropsExtended: AspectPropsExtended = { ... }
```

##### `annotationText`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

The annotation type to use for the annotation.

---

##### `anySource`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether any source is valid.

This will ignore all other restrictions and only check the port.

---

##### `ports`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* `number`[]
- *Default:* undefined

The restricted port.

Defaults to restricting all ports and only checking sources.

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* `string`[]
- *Default:* ['0.0.0.0/0', '::/0']

The restricted CIDRs for the given port.

---

##### `restrictedSGs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* `string`[]
- *Default:* undefined

The restricted source security groups for the given port.

---

### RuleCheckArgs <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs"></a>

The arguments for the checkRules function.

Extends the IAspectPropsBase interface which includes additional properties that can be used as args.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RuleCheckArgs } from '@renovosolutions/cdk-aspects-library-security-group'

const ruleCheckArgs: RuleCheckArgs = { ... }
```

##### `annotationText`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* `string`

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AnnotationType`](#@renovosolutions/cdk-aspects-library-security-group.AnnotationType)

The annotation type to use for the annotation.

---

##### `anySource`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether any source is valid.

This will ignore all other restrictions and only check the port.

---

##### `ports`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* `number`[]
- *Default:* undefined

The restricted port.

Defaults to restricting all ports and only checking sources.

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* `string`[]
- *Default:* ['0.0.0.0/0', '::/0']

The restricted CIDRs for the given port.

---

##### `restrictedSGs`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* `string`[]
- *Default:* undefined

The restricted source security groups for the given port.

---

##### `node`<sup>Required</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.node"></a>

```typescript
public readonly node: IConstruct;
```

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

The node to check.

---

## Classes <a name="Classes"></a>

### AWSRestrictedCommonPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect"></a>

Restricted common ports based on AWS Config rule https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.Initializer"></a>

```typescript
import { AWSRestrictedCommonPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new AWSRestrictedCommonPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### CISAwsFoundationBenchmark4Dot1Aspect <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect"></a>

CIS AWS Foundations Benchmark 4.1.

CIS recommends that no security group allow unrestricted ingress access to port 22. Removing unfettered connectivity to remote console services, such as SSH, reduces a server's exposure to risk.

This aspect uses the NoPublicIngressSSHAspect with an alternate annotation text.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.Initializer"></a>

```typescript
import { CISAwsFoundationBenchmark4Dot1Aspect } from '@renovosolutions/cdk-aspects-library-security-group'

new CISAwsFoundationBenchmark4Dot1Aspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### CISAwsFoundationBenchmark4Dot2Aspect <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect"></a>

CIS AWS Foundations Benchmark 4.2.

CIS recommends that no security group allow unrestricted ingress access to port 3389. Removing unfettered connectivity to remote console services, such as RDP, reduces a server's exposure to risk.

This aspect uses the NoPublicIngressRDPAspect with an alternate annotation text.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.Initializer"></a>

```typescript
import { CISAwsFoundationBenchmark4Dot2Aspect } from '@renovosolutions/cdk-aspects-library-security-group'

new CISAwsFoundationBenchmark4Dot2Aspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoIngressCommonManagementPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect"></a>

Aspect to restrict any access to common management ports.

22 - SSH
3389 - RDP
5985 - WinRM
5986 - WinRM HTTPS

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.Initializer"></a>

```typescript
import { NoIngressCommonManagementPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoIngressCommonManagementPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoIngressCommonRelationalDBPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect"></a>

Aspect to restrict any access to common relational DB ports.

3306 - MySQL
5432 - PostgreSQL
1521 - Oracle
1433 - SQL Server

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.Initializer"></a>

```typescript
import { NoIngressCommonRelationalDBPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoIngressCommonRelationalDBPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoIngressCommonWebPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect"></a>

Aspect to restrict any access to common web ports.

80 - HTTP
443 - HTTPS
8080 - HTTP
8443 - HTTPS

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.Initializer"></a>

```typescript
import { NoIngressCommonWebPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoIngressCommonWebPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

The same as the base NoPublicIngressAspectBase but with a more descriptive annotation.

Blocks the ANY port from the public internet.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.Initializer"></a>

```typescript
import { NoPublicIngressAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressAspectBase <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

The base aspect to determine if a security group allows inbound traffic from the public internet to any port.

This inherits everything from the base SecurityGroupAspectBase class and sets a default set of CIDRS that match allowing all IPs on AWS.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.Initializer"></a>

```typescript
import { NoPublicIngressAspectBase } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressAspectBase(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressCommonManagementPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect"></a>

Aspect to restrict public access to common management ports.

22 - SSH
3389 - RDP
5985 - WinRM
5986 - WinRM HTTPS

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.Initializer"></a>

```typescript
import { NoPublicIngressCommonManagementPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressCommonManagementPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressCommonRelationalDBPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect"></a>

Aspect to restrict public access to common relational DB ports.

3306 - MySQL
5432 - PostgreSQL
1521 - Oracle
1433 - SQL Server

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.Initializer"></a>

```typescript
import { NoPublicIngressCommonRelationalDBPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressCommonRelationalDBPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressCommonWebPortsAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect"></a>

Aspect to restrict public access to common web ports.

80 - HTTP
443 - HTTPS
8080 - HTTP
8443 - HTTPS

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.Initializer"></a>

```typescript
import { NoPublicIngressCommonWebPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressCommonWebPortsAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressRDPAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect"></a>

Aspect to determine if a security group allows inbound traffic from the public internet to the RDP port.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.Initializer"></a>

```typescript
import { NoPublicIngressRDPAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressRDPAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### NoPublicIngressSSHAspect <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect"></a>

Aspect to determine if a security group allows inbound traffic from the public internet to the SSH port.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.Initializer"></a>

```typescript
import { NoPublicIngressSSHAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressSSHAspect(props?: AspectPropsBase)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase)

---





### SecurityGroupAspectBase <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

The base class for all security group aspects in the library.

By default this will not restrict anything.

#### Initializers <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.Initializer"></a>

```typescript
import { SecurityGroupAspectBase } from '@renovosolutions/cdk-aspects-library-security-group'

new SecurityGroupAspectBase(props?: AspectPropsExtended)
```

##### `props`<sup>Optional</sup> <a name="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended`](#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended)

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

