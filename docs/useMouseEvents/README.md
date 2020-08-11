# useMouseEvents

返回一个包含鼠标事件处理函数注册器的对象。接收DOM的**ID**为参数，在组件`mounted`时给元素注册监听事件。

*由于在`setup`阶段，组件实例还没有挂载，无法直接获取到DOM节点的引用*

返回的对象包含：`onMouseDown`, `onMouseUp`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOver`

## 使用

参数接收DOM节点的ID，如果为空则默认选择`document`节点。

```javascript
import { useMouseEvents } from 'beautiful-vue-hooks'

export default {
  setup() {
    const {
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onMouseOver
    } = useMouseEvents('#element-id')
    onMouseMove($event => {
      // ...
    })
    ...
  }
}
```

::: warning
在`setup`阶段，实例还没创建，无法获取到组件实例，如果目标节点为子组件，会获取不到`DOM`节点。如：

```
<Super>
  <div id="target"></div>
</Super>
```

在`onMounted`钩子中，只能保证当前组件的挂载，不能保证子组件挂载，因此不能保证获取到`DOM`节点。
:::

## 示例

### 指定元素

通过元素ID指定鼠标事件的注册目标，需要注意的是**目标元素不能选择子组件中的元素，包括通过`slot`渲染的组件**。

<ClientOnly>
  <use-mouse-events-demo1 />
</ClientOnly>

### 全局注册

不传任何参数，则默认将鼠标事件注册到全局（`document`）节点。

<ClientOnly>
  <use-mouse-events-demo2 />
</ClientOnly>
