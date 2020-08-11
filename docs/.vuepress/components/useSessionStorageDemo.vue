<template>
  <demo :code="code" lang="javascript">
    <div id="use-session-storage-c-1">
      <input class="demo-input" :value="message" @input="setMessage($event.target.value)" placeholder="useSessionStorage" />
      <p>{{message}}</p>
    </div>
  </demo>
</template>
<script>
import { useSessionStorage } from '../../../dist'

export default {
  setup () {
    const [message, setMessage] = useSessionStorage('message', 'beautiful-vue-hooks')
    return {
      message,
      setMessage
    }
  },
  data () {
    return {
      code: `

        // <input :value="message" @input="setMessage($event.target.value)" />

        import { useSessionStorage } from 'beautiful-vue-hooks'

        export default {
          setup () {
            const [message, setMessage] = useSessionStorage('message', 'beautiful-vue-hooks')
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
