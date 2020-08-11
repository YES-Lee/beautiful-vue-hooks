# useWindowResize

窗口`resize`事件，传入一个回调函数作为初始化的处理事件

## 使用

```javascript
import { useWindowResize } from 'beautiful-vue-hooks'

export default {
  setup () {
    const onWindowResize = useWindowResize()
    onWindowResize((event) => {
      ...
    })
  }
}
```

## 示例

尝试调整浏览器窗口宽度

<ClientOnly>
  <use-window-resize-demo />
</ClientOnly>
