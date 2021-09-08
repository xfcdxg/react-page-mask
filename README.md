# react-page-mask

React 页面遮罩组件，函数触发，不污染 DOM。

### 安装
```
  $ npm install react-page-mask
  // or
  $ yarn add react-page-mask
```

### 引用

```js
  import Mask from 'react-page-mask'
```

### 使用方式

##### Mask(ReactNode, props)

```js
  const Layer = <div>content</div>

  // 基础用法
  Mask(Layer)

  // 深色遮罩
  Mask(Layer, { maskStyle: { opacity: .9 } })

  // 透明遮罩
  Mask(Layer, { mask: false })

  // 遮罩不可点击
  Mask(Layer, { maskClosable: false })

  // 遮罩关闭时处理逻辑
  Mask(Layer, { maskClick: () => {} })

```

### 可配置的Props

| 属性 | 类型 | 默认值 | 描述 |
|---|---|---|---|
| mask | Boolean | true | 用于展示遮罩 |
| maskClosable | Boolean | true| 设置遮罩是否可被关闭|
| style | Object | {} | 遮罩容器的样式 |
| maskStyle | Object | {} | 遮罩层的样式 |
| contentStyle | Object | {} | 内容容器的样式，建议在弹出层设置，通用配置可能会屏蔽掉遮罩的点击|
| contentClass | String | '' | 内容容器的样式类，建议同上|
| containerClass | String | '' | 遮罩容器的样式类 |
| maskClick | Function | | 遮罩关闭时的处理事件|
