<template>
  <div id="use-mouse-events-c-1">
    <span v-if="mouseOver">
      Coordinate：({{coordinate.x}}, {{coordinate.y}})
    </span>
    <span v-else>
      鼠标放上去试试
    </span>
  </div>
</template>

<script>
import { useMouseEvents } from '../../../dist'
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
</script>

<style scoped>
#use-mouse-events-c-1 {
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
  user-select: none;
  margin: 0 20%;
}
</style>