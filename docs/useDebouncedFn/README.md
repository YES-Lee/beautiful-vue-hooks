# useDebouncedFn

防抖函数hook，传入一个回调函数，返回这个回调函数的一个缓存版本，在设定的时间内多次触发事件时，只会执行一次。详细资料可以参考[Lodash Throttle](https://www.lodashjs.com/docs/lodash.debounce)。

防抖函数一般用于防止表单多次提交，控制回调函数短时间内不会执行多次。

## 使用

```javascript
import { useDebouncedFn } from 'beautiful-vue-hooks'

export default {
  setup () {
    const onWindowResize = useWindowResize()
    const debouncedHandler = useDebouncedFn(() => {
      ...
    })
    onWindowResize(debouncedHandler)
  }
}
```

## 示例

尝试调整浏览器窗口宽度

<ClientOnly>
  <use-debounced-fn-demo1 />
</ClientOnly>
