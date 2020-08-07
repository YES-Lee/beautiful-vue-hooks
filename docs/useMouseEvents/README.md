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
  <use-mouse-events-demo1 />
</ClientOnly>

```vue
<template>
  <demo-box>
    <div id="use-mouse-event-demo1">
      <span v-if="mouseOver">
        Coordinate：({{coordinate.x}}, {{coordinate.y}})
      </span>
      <span v-else>
        鼠标放上去试试
      </span>
    </div>
  </demo-box>
</template>

<script>
import { useMouseEvents } from '../../../src'
import { reactive, computed, ref } from '@vue/composition-api'

export default {
  setup() {
    let over = ref(false)
    const coordinate = reactive({ x: 0, y: 0 })
    const { onMouseMove, onMouseEnter, onMouseLeave } = useMouseEvents('#use-mouse-event-demo1')
    onMouseMove($event => {
      coordinate.x = $event.layerX
      coordinate.y = $event.layerY
    })
    onMouseEnter(() => {
      over.value = true
    })
    onMouseLeave(() => {
      over.value = false
    })

    return {
      coordinate,
      mouseOver: computed(() => over.value)
    }
  }
}
</script>

<style scoped>
#use-mouse-event-demo1 {
  width: 360px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
}

</style>
```
