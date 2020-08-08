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

## 示例

<ClientOnly>
  <demo>
    <use-mouse-events-demo />
  </demo>
</ClientOnly>

```vue
<template>
  <div id="use-mouse-event-demo1">
    <div id="local-area" class="local-area">
      <span v-if="mouseOver">
        Coordinate：({{coordinate.x}}, {{coordinate.y}})
      </span>
      <span v-else>
        鼠标放上去试试
      </span>
    </div>
    <div class="global-area">
      Coordinate：({{global.x}}, {{global.y}})
    </div>
  </div>
</template>

<script>
import { useMouseEvents } from '../../../dist'
import { reactive, computed, ref } from '@vue/composition-api'

export default {
  setup() {
    let over = ref(false)
    const coordinate = reactive({ x: 0, y: 0 })
    const global = reactive({ x: 0, y: 0 })
    const { onMouseMove, onMouseEnter, onMouseLeave } = useMouseEvents('#local-area')
    const { onMouseMove: onGloubalMouseMove } = useMouseEvents()
    onMouseMove($event => {
      $event.stopPropagation()
      coordinate.x = $event.offsetX
      coordinate.y = $event.offsetY
    })
    onGloubalMouseMove($event => {
      global.x = $event.layerX
      global.y = $event.layerY
    })
    onMouseEnter(($event) => {
      $event.stopPropagation()
      over.value = true
    })
    onMouseLeave(($event) => {
      $event.stopPropagation()
      over.value = false
    })

    return {
      coordinate,
      mouseOver: computed(() => over.value),
      global
    }
  }
}
</script>
```
