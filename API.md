# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### AspectPropsBase <a name="AspectPropsBase" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase"></a>

The base aspect properties available to any aspect.

JSII doesn't support an Omit when extending interfaces, so we create a base class to extend from.
This base class meets the needed properties for all non-base aspects.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.Initializer"></a>

```typescript
import { AspectPropsBase } from '@renovosolutions/cdk-aspects-library-security-group'

const aspectPropsBase: AspectPropsBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.property.annotationText">annotationText</a></code> | <code>string</code> | The annotation text to use for the annotation. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | The annotation type to use for the annotation. |

---

##### `annotationText`<sup>Optional</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

The annotation type to use for the annotation.

---

### AspectPropsExtended <a name="AspectPropsExtended" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended"></a>

The extended aspect properties available only to the base security aspects.

These additional properties shouldn't be changed in aspects that already have clearly defined goals.
So, this extended properties interface is applied selectively to the base aspects.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.Initializer"></a>

```typescript
import { AspectPropsExtended } from '@renovosolutions/cdk-aspects-library-security-group'

const aspectPropsExtended: AspectPropsExtended = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.annotationText">annotationText</a></code> | <code>string</code> | The annotation text to use for the annotation. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | The annotation type to use for the annotation. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.anySource">anySource</a></code> | <code>boolean</code> | Whether any source is valid. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.ports">ports</a></code> | <code>number[]</code> | The restricted port. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | The restricted CIDRs for the given port. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | The restricted source security groups for the given port. |

---

##### `annotationText`<sup>Optional</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

The annotation type to use for the annotation.

---

##### `anySource`<sup>Optional</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean
- *Default:* false

Whether any source is valid.

This will ignore all other restrictions and only check the port.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]
- *Default:* undefined

The restricted port.

Defaults to restricting all ports and only checking sources.

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]
- *Default:* ['0.0.0.0/0', '::/0']

The restricted CIDRs for the given port.

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]
- *Default:* undefined

The restricted source security groups for the given port.

---

### RuleCheckArgs <a name="RuleCheckArgs" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs"></a>

The arguments for the checkRules function.

Extends the IAspectPropsBase interface which includes additional properties that can be used as args.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.Initializer"></a>

```typescript
import { RuleCheckArgs } from '@renovosolutions/cdk-aspects-library-security-group'

const ruleCheckArgs: RuleCheckArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.annotationText">annotationText</a></code> | <code>string</code> | The annotation text to use for the annotation. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | The annotation type to use for the annotation. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.anySource">anySource</a></code> | <code>boolean</code> | Whether any source is valid. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.ports">ports</a></code> | <code>number[]</code> | The restricted port. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | The restricted CIDRs for the given port. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | The restricted source security groups for the given port. |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.node">node</a></code> | <code>constructs.IConstruct</code> | The node to check. |

---

##### `annotationText`<sup>Optional</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

The annotation text to use for the annotation.

---

##### `annotationType`<sup>Optional</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

The annotation type to use for the annotation.

---

##### `anySource`<sup>Optional</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean
- *Default:* false

Whether any source is valid.

This will ignore all other restrictions and only check the port.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]
- *Default:* undefined

The restricted port.

Defaults to restricting all ports and only checking sources.

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]
- *Default:* ['0.0.0.0/0', '::/0']

The restricted CIDRs for the given port.

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]
- *Default:* undefined

The restricted source security groups for the given port.

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.RuleCheckArgs.property.node"></a>

```typescript
public readonly node: IConstruct;
```

- *Type:* constructs.IConstruct

The node to check.

---

## Classes <a name="Classes" id="Classes"></a>

### AWSRestrictedCommonPortsAspect <a name="AWSRestrictedCommonPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect"></a>

Restricted common ports based on AWS Config rule https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.Initializer"></a>

```typescript
import { AWSRestrictedCommonPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new AWSRestrictedCommonPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.AWSRestrictedCommonPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### CISAwsFoundationBenchmark4Dot1Aspect <a name="CISAwsFoundationBenchmark4Dot1Aspect" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect"></a>

CIS AWS Foundations Benchmark 4.1.

CIS recommends that no security group allow unrestricted ingress access to port 22. Removing unfettered connectivity to remote console services, such as SSH, reduces a server's exposure to risk.

This aspect uses the NoPublicIngressSSHAspect with an alternate annotation text.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.Initializer"></a>

```typescript
import { CISAwsFoundationBenchmark4Dot1Aspect } from '@renovosolutions/cdk-aspects-library-security-group'

new CISAwsFoundationBenchmark4Dot1Aspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot1Aspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### CISAwsFoundationBenchmark4Dot2Aspect <a name="CISAwsFoundationBenchmark4Dot2Aspect" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect"></a>

CIS AWS Foundations Benchmark 4.2.

CIS recommends that no security group allow unrestricted ingress access to port 3389. Removing unfettered connectivity to remote console services, such as RDP, reduces a server's exposure to risk.

This aspect uses the NoPublicIngressRDPAspect with an alternate annotation text.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.Initializer"></a>

```typescript
import { CISAwsFoundationBenchmark4Dot2Aspect } from '@renovosolutions/cdk-aspects-library-security-group'

new CISAwsFoundationBenchmark4Dot2Aspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.CISAwsFoundationBenchmark4Dot2Aspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoIngressCommonManagementPortsAspect <a name="NoIngressCommonManagementPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect"></a>

Aspect to restrict any access to common management ports.

22 - SSH
3389 - RDP
5985 - WinRM
5986 - WinRM HTTPS

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.Initializer"></a>

```typescript
import { NoIngressCommonManagementPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoIngressCommonManagementPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonManagementPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoIngressCommonRelationalDBPortsAspect <a name="NoIngressCommonRelationalDBPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect"></a>

Aspect to restrict any access to common relational DB ports.

3306 - MySQL
5432 - PostgreSQL
1521 - Oracle
1433 - SQL Server

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.Initializer"></a>

```typescript
import { NoIngressCommonRelationalDBPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoIngressCommonRelationalDBPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonRelationalDBPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoIngressCommonWebPortsAspect <a name="NoIngressCommonWebPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect"></a>

Aspect to restrict any access to common web ports.

80 - HTTP
443 - HTTPS
8080 - HTTP
8443 - HTTPS

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.Initializer"></a>

```typescript
import { NoIngressCommonWebPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoIngressCommonWebPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoIngressCommonWebPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressAspect <a name="NoPublicIngressAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The same as the base NoPublicIngressAspectBase but with a more descriptive annotation.

Blocks the ANY port from the public internet.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.Initializer"></a>

```typescript
import { NoPublicIngressAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressAspectBase <a name="NoPublicIngressAspectBase" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase"></a>

- *Implements:* aws-cdk-lib.IAspect

The base aspect to determine if a security group allows inbound traffic from the public internet to any port.

This inherits everything from the base SecurityGroupAspectBase class and sets a default set of CIDRS that match allowing all IPs on AWS.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.Initializer"></a>

```typescript
import { NoPublicIngressAspectBase } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressAspectBase(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressAspectBase.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressCommonManagementPortsAspect <a name="NoPublicIngressCommonManagementPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect"></a>

Aspect to restrict public access to common management ports.

22 - SSH
3389 - RDP
5985 - WinRM
5986 - WinRM HTTPS

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.Initializer"></a>

```typescript
import { NoPublicIngressCommonManagementPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressCommonManagementPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonManagementPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressCommonRelationalDBPortsAspect <a name="NoPublicIngressCommonRelationalDBPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect"></a>

Aspect to restrict public access to common relational DB ports.

3306 - MySQL
5432 - PostgreSQL
1521 - Oracle
1433 - SQL Server

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.Initializer"></a>

```typescript
import { NoPublicIngressCommonRelationalDBPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressCommonRelationalDBPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonRelationalDBPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressCommonWebPortsAspect <a name="NoPublicIngressCommonWebPortsAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect"></a>

Aspect to restrict public access to common web ports.

80 - HTTP
443 - HTTPS
8080 - HTTP
8443 - HTTPS

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.Initializer"></a>

```typescript
import { NoPublicIngressCommonWebPortsAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressCommonWebPortsAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressCommonWebPortsAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressRDPAspect <a name="NoPublicIngressRDPAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect"></a>

Aspect to determine if a security group allows inbound traffic from the public internet to the RDP port.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.Initializer"></a>

```typescript
import { NoPublicIngressRDPAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressRDPAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressRDPAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### NoPublicIngressSSHAspect <a name="NoPublicIngressSSHAspect" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect"></a>

Aspect to determine if a security group allows inbound traffic from the public internet to the SSH port.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.Initializer"></a>

```typescript
import { NoPublicIngressSSHAspect } from '@renovosolutions/cdk-aspects-library-security-group'

new NoPublicIngressSSHAspect(props?: AspectPropsBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsBase">AspectPropsBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.NoPublicIngressSSHAspect.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---


### SecurityGroupAspectBase <a name="SecurityGroupAspectBase" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase"></a>

- *Implements:* aws-cdk-lib.IAspect

The base class for all security group aspects in the library.

By default this will not restrict anything.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.Initializer"></a>

```typescript
import { SecurityGroupAspectBase } from '@renovosolutions/cdk-aspects-library-security-group'

new SecurityGroupAspectBase(props?: AspectPropsExtended)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended">AspectPropsExtended</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AspectPropsExtended">AspectPropsExtended</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.annotationText">annotationText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.annotationType">annotationType</a></code> | <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.anySource">anySource</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.restrictedCidrs">restrictedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.restrictedSGs">restrictedSGs</a></code> | <code>string[]</code> | *No description.* |

---

##### `annotationText`<sup>Required</sup> <a name="annotationText" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.annotationText"></a>

```typescript
public readonly annotationText: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.annotationType"></a>

```typescript
public readonly annotationType: AnnotationType;
```

- *Type:* <a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType">AnnotationType</a>

---

##### `anySource`<sup>Required</sup> <a name="anySource" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.anySource"></a>

```typescript
public readonly anySource: boolean;
```

- *Type:* boolean

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `restrictedCidrs`<sup>Optional</sup> <a name="restrictedCidrs" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.restrictedCidrs"></a>

```typescript
public readonly restrictedCidrs: string[];
```

- *Type:* string[]

---

##### `restrictedSGs`<sup>Optional</sup> <a name="restrictedSGs" id="@renovosolutions/cdk-aspects-library-security-group.SecurityGroupAspectBase.property.restrictedSGs"></a>

```typescript
public readonly restrictedSGs: string[];
```

- *Type:* string[]

---



## Enums <a name="Enums" id="Enums"></a>

### AnnotationType <a name="AnnotationType" id="@renovosolutions/cdk-aspects-library-security-group.AnnotationType"></a>

The supported annotation types.

Only error will stop deployment of restricted resources.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType.WARNING">WARNING</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-aspects-library-security-group.AnnotationType.INFO">INFO</a></code> | *No description.* |

---

##### `WARNING` <a name="WARNING" id="@renovosolutions/cdk-aspects-library-security-group.AnnotationType.WARNING"></a>

---


##### `ERROR` <a name="ERROR" id="@renovosolutions/cdk-aspects-library-security-group.AnnotationType.ERROR"></a>

---


##### `INFO` <a name="INFO" id="@renovosolutions/cdk-aspects-library-security-group.AnnotationType.INFO"></a>

---

