<template>
  <demo :code="code" lang="javascript">
    <use-mouse-events1 />
  </demo>
</template>
<script>
export default {
  data () {
    return {
      code: `
        import { useMouseEvents } from 'beautiful-vue-hooks'
        import { reactive, computed, ref } from '@vue/composition-api'
        export default {
          setup() {
            let over = ref(false)
            const coordinate = reactive({ x: 0, y: 0 })
            const { onMouseMove, onMouseEnter, onMouseLeave } = useMouseEvents('#use-mouse-events-c-1')
            onMouseMove($event => {
              $event.stopPropagation()
              coordinate.x = $event.offsetX
              coordinate.y = $event.offsetY
            })
            onMouseEnter(($event) => {
              $event.stopPropagation()
              over.value = true
            })
            onMouseLeave(($event) => {
              $event.stopPropagation()
              over.value = false
            })

            return {
              coordinate,
              mouseOver: computed(() => over.value)
            }
          }
        }
      `
    }
  }
}
</script>