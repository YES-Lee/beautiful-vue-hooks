<template>
  <demo :code="code" lang="javascript">
    <div id="home-demo">
      <div id="demo-area">
        Coordinate：({{clientX}}, {{clientY}})
      </div>
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
#home-demo {
  padding: 2rem 0;
}

#demo-area {
  margin: 0 auto;
  width: 360px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
  user-select: none;
}

</style>