# 快速开始

## 安装

```bash
yarn add beautiful-vue-hooks
// or
npm install beautiful-vue-hooks
```

## 使用

```javascript
import { useMouseEvents } from 'beautiful-vue-hooks'

export default {
  setup() {
    const { onMouseMove } = useMouseEvents('#element-id')
    onMouseMove($event => {
      // ...
    })
  }
}
```
