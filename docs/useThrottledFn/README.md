# useThrottledFn

节流函数hook，传入一个回调函数，返回这个回调函数的一个缓存版本，会在设定的时间之后执行一次回调。详细资料可以参考[Lodash Throttle](https://www.lodashjs.com/docs/lodash.throttle)。

节流函数一般用于触发频率非常高的事件中，比如：`scroll`, `mousemove`, `resize`等。用来控制回调函数执行频率，优化应用性能。

## 使用

```javascript
import { useThrottledFn } from 'beautiful-vue-hooks'

export default {
  setup () {
    const onWindowResize = useWindowResize()
    const throttledHandler = useThrottledFn(() => {
      ...
    })
    onWindowResize(throttledHandler)
  }
}
```

## 示例

尝试调整浏览器窗口宽度

<ClientOnly>
  <use-throttled-fn-demo1 />
</ClientOnly>
