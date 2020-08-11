# useWindowScroll

窗口`scroll`事件，传入一个回调函数作为初始化的处理事件。

## 使用

```javascript
import { useWindowScroll } from 'beautiful-vue-hooks'

export default {
  setup () {
    const onWindowResize = useWindowScroll()
    onWindowResize((event) => {
      ...
    })
  }
}
```

## 示例

传入一个回调函数，在页面滚动的时候会触发回调函数。

<ClientOnly>
  <use-window-scroll-demo1 />
</ClientOnly>

如果没有传入回调函数，也可以使用返回的注册器来注册回调函数。

<ClientOnly>
  <use-window-scroll-demo2 />
</ClientOnly>

::: tip
为了优化性能，我们一般使用节流函数来控制回调函数执行的频率，具体参考[useThrottledFn](/useThrottledFn/)。
:::

<ClientOnly>
  <use-window-scroll-demo3 />
</ClientOnly>
