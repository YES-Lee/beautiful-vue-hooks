# useStorage

帮助你快速使用`Session Storage`和`Local Storage`的hook工厂。

根据参数返回一个`useSessionStorage`或`useLocalStorage`hook。

## 使用

```javascript
import { useStorage } from 'beautiful-vue-hooks'

export default {
  setup () {
    const useLocalStorage = useStorage('local')
  }
}
```

## 示例

参考[useLocalStorage](/useLocalStorage/#示例)和[useSessionStorage](/useSessionStorage/#示例)
