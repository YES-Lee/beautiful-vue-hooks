<template>
  <demo :code="code" lang="javascript">
    <div id="use-window-scroll-c-1">
      window.scrollY: {{scrollY}}
    </div>
  </demo>
</template>
<script>
import { useWindowScroll, useThrottledFn } from '../../../dist'
import { ref, computed } from '@vue/composition-api'

export default {
  setup () {
    const scrollY = ref(window.scrollY)
    const onWindowScroll = useWindowScroll(useThrottledFn((event) => {
      scrollY.value = window.scrollY
    }, 300))
  
    return {
      scrollY
    }
  },
  data () {
    return {
      code: `
        import { useWindowScroll } from 'beautiful-vue-hooks'
        import { ref, computed } from '@vue/composition-api'

        export default {
          setup () {
            const scrollY = ref(window.scrollY)
            const onWindowScroll = useWindowScroll(useThrottledFn((event) => {
              scrollY.value = window.scrollY
            }, 300))

            return {
              scrollY
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
#use-window-scroll-c-1 {
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