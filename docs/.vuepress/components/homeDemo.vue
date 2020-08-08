<template>
  <div id="home-demo">
    <div id="demo-area">
      Coordinate：({{screenX}}, {{screenY}})
    </div>
  </div>
</template>

<script>
import { useMouseState } from '../../../dist'

export default {
  setup() {
    const { screenX, screenY } = useMouseState()

    return {
      screenX,
      screenY
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