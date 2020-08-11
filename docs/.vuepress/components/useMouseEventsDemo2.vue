<template>
  <demo :code="code" lang="javascript">
    <div id="use-mouse-events-c-2">
      Coordinate：({{coordinate.x}}, {{coordinate.y}})
    </div>
  </demo>
</template>
<script>
import { useMouseEvents } from '../../../dist'
import { reactive } from '@vue/composition-api'

export default {
  setup() {
    const coordinate = reactive({ x: 0, y: 0 })
    const { onMouseMove } = useMouseEvents()
    onMouseMove($event => {
      coordinate.x = $event.clientX
      coordinate.y = $event.clientY
    })
    return {
      coordinate
    }
  },
  data () {
    return {
      code: `
        import { useMouseState } from 'beautiful-vue-hooks'
        export default {
          setup() {
            const { clientX, clientY } = useMouseState()

            return {
              clientX,
              clientY
            }
          }
        }
      `
    }
  }
}
</script>
<style scoped>
#use-mouse-events-c-2 {
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