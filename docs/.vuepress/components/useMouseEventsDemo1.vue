<template>
  <demo-box>
    <div id="use-mouse-event-demo1">
      <div id="local-area" class="local-area">
        <span v-if="mouseOver">
          Coordinate：({{coordinate.x}}, {{coordinate.y}})
        </span>
        <span v-else>
          鼠标放上去试试
        </span>
      </div>
      <div class="global-area">
        Coordinate：({{global.x}}, {{global.y}})
      </div>
    </div>
  </demo-box>
</template>

<script>
import { useMouseEvents } from '../../../src'
import { reactive, computed, ref } from '@vue/composition-api'

export default {
  setup() {
    let over = ref(false)
    const coordinate = reactive({ x: 0, y: 0 })
    const global = reactive({ x: 0, y: 0 })
    const { onMouseMove, onMouseEnter, onMouseLeave } = useMouseEvents('#local-area')
    const { onMouseMove: onGloubalMouseMove } = useMouseEvents()
    onMouseMove($event => {
      $event.stopPropagation()
      coordinate.x = $event.offsetX
      coordinate.y = $event.offsetY
    })
    onGloubalMouseMove($event => {
      global.x = $event.layerX
      global.y = $event.layerY
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
      mouseOver: computed(() => over.value),
      global
    }
  }
}
</script>

<style scoped>
#use-mouse-event-demo1 {
  display: flex;
}

.local-area {
  flex: 1;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
  margin-right: 1rem;
}

.global-area {
  flex: 1;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
}

</style>