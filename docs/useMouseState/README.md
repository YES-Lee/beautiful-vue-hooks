# useMouseState

返回一个对象，包含了鼠标的位置信息：`clientX`, `clientY`, `screenX`, `screenY`。

*由于在`setup`阶段，组件实例还没有挂载，无法直接获取到DOM节点的引用*

## 使用

参数接收DOM节点的ID，如果为空则默认选择`document`节点。

```javascript
import { useMouseState } from 'beautiful-vue-hooks'

export default {
  setup() {
    const {
      clientX,
      clientY,
      screenX,
      screenY
    } = useMouseState('#element-id')
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
    <use-mouse-state-demo />
  </demo>
</ClientOnly>

```vue
<template>
  <div id="use-mouse-event-demo1">
    <div id="local-area" class="local-area">
      Coordinate：({{clientX}}, {{clientY}})
    </div>
    <div class="global-area">
      Coordinate：({{screenX}}, {{screenY}})
    </div>
  </div>
</template>

<script>
import { useMouseState } from '../../../dist'
import { reactive, computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const { clientX, clientY } = useMouseState('#local-area')
    const { screenX, screenY } = useMouseState()

    return {
      clientX,
      clientY,
      screenX,
      screenY
    }
  }
}
</script>
```
