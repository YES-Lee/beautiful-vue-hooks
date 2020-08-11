<template>
  <demo :code="code" lang="javascript">
    <div id="use-local-storage-c-1">
      <input class="demo-input" :value="message" @input="setMessage($event.target.value)" placeholder="useLocalStorage" />
      <p>{{message}}</p>
    </div>
  </demo>
</template>
<script>
import { useLocalStorage } from '../../../dist'

export default {
  setup () {
    const [message, setMessage] = useLocalStorage('message', 'beautiful-vue-hooks')
    return {
      message,
      setMessage
    }
  },
  data () {
    return {
      code: `

        // <input :value="message" @input="setMessage($event.target.value)" />

        import { useLocalStorage } from 'beautiful-vue-hooks'

        export default {
          setup () {
            const [message, setMessage] = useLocalStorage('message', 'beautiful-vue-hooks')
            return {
              message,
              setMessage
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
.demo-input {
  padding: .5rem;
  outline: none;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
