<template>
  <demo :code="code" lang="javascript">
    <div id="use-mouse-state-c-2">
      Coordinate：({{clientX}}, {{clientY}})
    </div>
  </demo>
</template>
<script>
import { useMouseState } from '../../../dist'

export default {
  setup() {
    const { clientX, clientY } = useMouseState()

    return {
      clientX,
      clientY
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
#use-mouse-state-c-2 {
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