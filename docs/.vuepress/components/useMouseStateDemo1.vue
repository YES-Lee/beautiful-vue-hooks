<template>
  <demo :code="code" lang="javascript">
    <use-mouse-state1 />
  </demo>
</template>
<script>
export default {
  data () {
    return {
      code: `
        import { useMouseState } from 'beautiful-vue-hooks'
        export default {
          setup() {
            const { clientX, clientY } = useMouseState('#use-mouse-state-c-1')

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