# LoadMore 页底

<CodeDemo name="LoadMore">

<<< @/../../demo/src/components/Show/LoadMore/index.tsx

</CodeDemo>

## Import

```js
import { TaLoadMore } from 'tantalum-ui-mobile-react'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性    | 类型    | 默认值 | 必填 | 说明                 |
| ------- | ------- | ------ | ---- | -------------------- |
| loading | boolean | true   | 否   | 是否显示为加载中状态 |

## Slots

### 附加内容（children）

```tsx
<TaLoadMore>加载中...</TaLoadMore>
```
