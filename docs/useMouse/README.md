# useMouse

这是`useMouseState`和`useMouseEvents`的一个组合hook，返回一个数组，数组第一项为`useMouseState`的返回结果，第二项为`useMouseEvents`返回结果。

*由于在`setup`阶段，组件实例还没有挂载，无法直接获取到DOM节点的引用*

## 使用

参数接收DOM节点的ID，如果为空则默认选择`document`节点。

返回结果参考[useMouseState](/useMouseState/)和[useMouseEvents](useMouseEvents/)。

```javascript
import { useMouse } from 'beautiful-vue-hooks'

export default {
  setup() {
    const [{ clientX }, { onMouseMove }] = useMouse('#element-id')
    ...
  }
}
```

## 示例

参考[useMouseState](/useMouseState/#示例)和[useMouseEvents](useMouseEvents/#示例)。
