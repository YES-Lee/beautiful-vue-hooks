<template>
  <demo :code="code" lang="javascript">
    <div id="use-request-animation-frame-c-2">
      <div class="animating-item" :style="{ transform: `rotateZ(${rad}deg)` }">
        动画
      </div>
    </div>
  </demo>
</template>
<script>
import { useRequestAnimationFrame } from '../../../dist'
import { ref, computed } from '@vue/composition-api'

export default {
  setup () {
    const rad = ref(0)
    const options = {
      startAt: 0,
      increment: 1,
      finishAt: -1
    }
    useRequestAnimationFrame((progress, next) => {
      rad.value = progress
      next()
    }, options)

    return {
      rad
    }
  },
  data () {
    return {
      code: `
        import { useRequestAnimationFrame } from 'beautiful-vue-hooks'
        import { ref, computed } from '@vue/composition-api'

        export default {
          setup () {
            const rad = ref(0)
            const options = {
              startAt: 0,
              increment: 1,
              finishAt: -1
            }
            useRequestAnimationFrame((progress, next) => {
              rad.value = progress
              next()
            }, options)

            return {
              rad
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
#use-request-animation-frame-c-2 {
  height: 88px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #888;
  user-select: none;
  margin: 0 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  .animating-item {
    padding: .5rem;
    width: 100px;
    border: 1px solid #ddd;
    background-color: #eee;
  }
}
</style>