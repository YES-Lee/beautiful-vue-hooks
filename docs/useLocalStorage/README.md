# useLocalStorage

[useStorage](/useStorage/)的一个快捷方式

## 使用

```javascript
import { useLocalStorage } from 'beautiful-vue-hooks'

export default {
  setup () {
    const [message, setMessage] = useLocalStorage('messages', 'beautiful-vue-hooks')
  }
}
```

## 示例

<ClientOnly>
  <use-local-storage-demo />
</ClientOnly>
