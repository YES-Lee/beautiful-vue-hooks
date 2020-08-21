<template>
  <demo :code="code" lang="javascript">
    <div id="use-online-state-c-3">
      Connection status: {{online ? 'online' : 'offline'}}
    </div>
  </demo>
</template>
<script>
import { useOnlineState } from '../../../dist'

export default {
  setup () {
    return {
      online: useOnlineState()
    }
  },
  data () {
    return {
      code: `
        import { useOnlineState } from 'beautiful-vue-hooks'

        export default {
          setup () {
            return {
              online: useOnlineState()
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
#use-online-state-c-3 {
  height: 88px;
  line-height: 88px;
  width: 300px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
  margin: 0 auto;
}
</style>