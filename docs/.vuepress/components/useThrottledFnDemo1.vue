<template>
  <demo :code="code" lang="javascript">
    <div id="use-throttled-fn-c-1">
      window width: {{width}}
    </div>
  </demo>
</template>
<script>
import { useWindowResize, useThrottledFn } from '../../../dist'
import { ref, computed } from '@vue/composition-api'

export default {
  setup () {
    const width = ref(window.innerWidth)
    const onWindowResize = useWindowResize()

    const throttledHandler = useThrottledFn(() => {
      width.value = window.innerWidth
    }, 600)

    onWindowResize(throttledHandler)
  
    return {
      width
    }
  },
  data () {
    return {
      code: `
        import { useWindowResize, useThrottledFn } from 'beautiful-vue-hooks'
        import { ref, computed } from '@vue/composition-api'

        export default {
          setup () {
            const width = ref(window.innerWidth)
            const onWindowResize = useWindowResize()

            const throttledHandler = useThrottledFn(() => {
              width.value = window.innerWidth
            }, 600)

            onWindowResize(throttledHandler)
          
            return {
              width
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
#use-throttled-fn-c-1 {
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
  user-select: none;
  margin: 0 20%;
}
</style>