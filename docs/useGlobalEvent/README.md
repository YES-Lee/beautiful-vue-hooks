# useGlobalEvent

传入一个事件名称，将会在`window`对象上注册对应的事件，并返回一个事件注册器。

## 使用

第一个参数为事件名称，第二个参数为事件注册选项，具体看[addEventListener文档](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

```javascript
import { useGlobalEvent } from 'beautiful-vue-hooks'

export default {
  setup () {
    const onWindowResize = useGlobalEvent('resize', {/** options */})
    onWindowResize((event) => {
      ...
    })
  }
}
```

## 示例

尝试调整浏览器窗口宽度

<ClientOnly>
  <use-global-event-demo />
</ClientOnly>
