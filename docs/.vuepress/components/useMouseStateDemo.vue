<template>
  <div id="use-mouse-event-demo1">
    <div id="local-area" class="local-area">
      Coordinate：({{clientX}}, {{clientY}})
    </div>
    <div class="global-area">
      Coordinate：({{screenX}}, {{screenY}})
    </div>
  </div>
</template>

<script>
import { useMouseState } from '../../../dist'
import { reactive, computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const { clientX, clientY } = useMouseState('#local-area')
    const { screenX, screenY } = useMouseState()

    return {
      clientX,
      clientY,
      screenX,
      screenY
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
  user-select: none;
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
  user-select: none;
}

</style>