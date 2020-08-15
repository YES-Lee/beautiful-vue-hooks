# useRequestAnimationFrame

当使用`useRequestAnimationFrame`的时候，会立即开始调用`window.requestAnimationFrame`。传入的函数会接收到两个参数，分别是当前执行进度和一个`next`函数，当执行`next`函数时会立即进行下一次`window.requestAnimationFrame`调用。当动画进度达到100（默认值）时，整个过程结束。也可以在第二个参数中设置`finishAt`来控制结束时机。

## 使用

```javascript
import { useRequestAnimationFrame } from 'beautiful-vue-hooks'

export default {
  setup () {
    const onFinish = useRequestAnimationFrame((progress, next) => {
      // ...
      next() // 执行下一帧动画
    })
  }
}
```

## 示例

<ClientOnly>
  <use-request-animation-frame-demo1 />
</ClientOnly>

**选项**

第二个参数可以传入一个对象作来控制动画行为。选项包括三个字段`startAt`, `increment`, `finishAt`。

::: warning
当`finishAt`为-1时，动画会无限循环。
:::

<ClientOnly>
  <use-request-animation-frame-demo2 />
</ClientOnly>

**动画结束**

返回一个函数注册器，注册的回调函数将会在动画结束后调用。

<ClientOnly>
  <use-request-animation-frame-demo3 />
</ClientOnly>
