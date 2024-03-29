# 快速上手

## 使用 Vite 创建项目

```sh
# npm 6.x
npm create vite@latest my-react-app --template react-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-react-app -- --template react-ts

# yarn
yarn create vite my-react-app --template react-ts

# pnpm
pnpm create vite my-react-app -- --template react-ts
```

## 引入 tantalum-ui-mobile-react

```sh
# npm
npm i -S tantalum-ui-mobile-react

# yarn
yarn add tantalum-ui-mobile-react

# pnpm
pnpm add tantalum-ui-mobile-react
```

修改 `src/App.tsx`，引入 tantalum-ui-mobile-react 的按钮组件。

```tsx
import { FC } from 'react'
import { TaButton } from 'tantalum-ui-mobile-react'
import 'tantalum-ui-mobile-react/es/Button/style/index'
// import 'tantalum-ui-mobile-react/es/Button/style/sass' // use sass

const App: FC = () => (
  <div className="App">
    <TaButton type="primary">Button</TaButton>
  </div>
)

export default App
```

## API 调用

API 调用需要先引入对应的组件，方可调用，引用方式同上。

```tsx
import { showToast } from 'tantalum-ui-mobile-react'
import 'tantalum-ui-mobile-react/es/Toast/style/index'

const App: FC = () => (
  <div className="App">
    <TaButton
      type="primary"
      onClick={() =>
        showToast({
          title: '成功',
          type: 'success',
          duration: 2000
        })
      }
    >
      Button
    </TaButton>
  </div>
)

export default App
```

## 引入完整样式

```ts
import 'tantalum-ui-mobile-react/es/style/index'
// import 'tantalum-ui-mobile-react/es/style/sass' // use sass
```
