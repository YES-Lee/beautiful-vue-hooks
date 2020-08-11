<template>
  <div id="use-mouse-state-c-1">
    Coordinate：({{clientX}}, {{clientY}})
  </div>
</template>

<script>
import { useMouseState } from '../../../dist'

export default {
  setup() {
    const { clientX, clientY } = useMouseState('#use-mouse-state-c-1')

    return {
      clientX,
      clientY
    }
  }
}
</script>

<style scoped>
#use-mouse-state-c-1 {
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