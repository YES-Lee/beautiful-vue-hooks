<template>
  <demo :code="code" lang="javascript">
    <div id="use-debounced-fn-c-1">
      window width: {{width}}
    </div>
  </demo>
</template>
<script>
import { useWindowResize, useDebouncedFn } from '../../../dist'
import { ref, computed } from '@vue/composition-api'

export default {
  setup () {
    const width = ref(window.innerWidth)
    const onWindowResize = useWindowResize()

    const debouncedHandler = useDebouncedFn(() => {
      width.value = window.innerWidth
    }, 600)

    onWindowResize(debouncedHandler)
  
    return {
      width
    }
  },
  data () {
    return {
      code: `
        import { useWindowResize, useDebouncedFn } from 'beautiful-vue-hooks'
        import { ref, computed } from '@vue/composition-api'

        export default {
          setup () {
            const width = ref(window.innerWidth)
            const onWindowResize = useWindowResize()

            const debouncedHandler = useDebouncedFn(() => {
              width.value = window.innerWidth
            }, 600)

            onWindowResize(debouncedHandler)
          
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
#use-debounced-fn-c-1 {
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