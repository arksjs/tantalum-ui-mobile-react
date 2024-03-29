# Radio/RadioGroup 单选项

<CodeDemo name="Radio">

<<< @/../../demo/src/components/Form/Radio/index.tsx

</CodeDemo>

## Import

```js
import { TaRadio, TaRadioGroup } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { RadioOptionItem } from 'tantalum-ui-mobile-react'
```

## Radio

### Radio Props

| 属性         | 类型             | 默认值 | 必填 | 说明                                                                                             |
| ------------ | ---------------- | ------ | ---- | ------------------------------------------------------------------------------------------------ |
| checked      | boolean          | false  | 否   | 当前是否选中，可用来设置默认选中                                                                 |
| checkedValue | string \| number | ''     | 否   | 该项值，[RadioGroup](./Radio.md#radiogroup-单项选择器) 的 `onChange` 事件会携带 `radio` 的 value |
| disabled     | boolean          | false  | 否   | 是否禁用                                                                                         |
| activeColor  | string           |        | 否   | 自定义激活态的图标颜色                                                                           |

### Radio Events

| 事件名称        | 描述               | 回调函数参数     |
| --------------- | ------------------ | ---------------- |
| onCheckedChange | 勾选发生改变时触发 | checked: boolean |

### Radio Slots

```tsx
<TaRadio>男</TaRadio>
<TaRadio>女</TaRadio>
```

## RadioGroup

注：

- 内部由多个 [Radio](./Radio.md#Radio) 组成。
- 支持表单，具体可参考 [Form](./Form.md)。

### RadioGroup Props

| 属性        | 类型              | 默认值 | 必填 | 说明                                        |
| ----------- | ----------------- | ------ | ---- | ------------------------------------------- |
| value       | string \| number  | ''     | 否   | 当前选择子项的 value 值                     |
| name        | string            |        | 否   | 标识                                        |
| inline      | boolean           | false  | 否   | 是否使用内联布局，默认纵向布局              |
| activeColor | string            |        | 否   | 自定义子项激活态的图标颜色                  |
| options     | RadioOptionItem[] |        | 否   | 子项配置，优先级低于 slot 放入 `Radio` 组件 |

#### RadioOptionItem

| key   | 类型             | 默认值 | 必填 | 说明                               |
| ----- | ---------------- | ------ | ---- | ---------------------------------- |
| value | string \| number |        | 是   | 值， 同 `Radio` 组件 value         |
| label | string           |        | 是   | 描述，同 `Radio` 组件 slot default |

### RadioGroup Events

| 事件     | 描述                 | 回调函数参数            |
| -------- | -------------------- | ----------------------- |
| onChange | 选中项发生改变时触发 | value: string \| number |

### RadioGroup Slots

#### children

```tsx
<TaRadio.Group>
  <TaRadio>男</TaRadio>
  <TaRadio>女</TaRadio>
</TaRadio.Group>
```
