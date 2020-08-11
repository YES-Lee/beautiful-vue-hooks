# useSessionStorage

[useStorage](/useStorage/)的一个快捷方式

## 使用

```javascript
import { useSessionStorage } from 'beautiful-vue-hooks'

export default {
  setup () {
    const [message, setMessage] = useSessionStorage('message', 'beautiful-vue-hooks')
  }
}
```

## 示例

<ClientOnly>
  <use-session-storage-demo />
</ClientOnly>
