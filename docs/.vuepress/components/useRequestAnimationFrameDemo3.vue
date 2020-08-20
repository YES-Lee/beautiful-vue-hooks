<template>
  <demo :code="code" lang="javascript">
    <div id="use-request-animation-frame-c-3">
      <div class="animating-item" :style="{ transform: `translateX(${left}px)` }">
        动画
      </div>
      <div v-if="finished">
        动画结束
      </div>
      <div v-else>
        动画进行中
      </div>
    </div>
  </demo>
</template>
<script>
import { useRequestAnimationFrame } from '../../../dist'
import { ref, computed } from '@vue/composition-api'

export default {
  setup () {
    const left = ref(0)
    const finished = ref(false)

    const onFinish = useRequestAnimationFrame((progress, next) => {
      left.value = progress
      next()
    })

    onFinish(() => {
      finished.value = true
    })

    return {
      left,
      finished
    }
  },
  data () {
    return {
      code: `
        import { useRequestAnimationFrame } from 'beautiful-vue-hooks'
        import { ref, computed } from '@vue/composition-api'

        export default {
          setup () {
            const left = ref(0)
            const finished = ref(false)

            const onFinish = useRequestAnimationFrame((progress, next) => {
              left.value = progress
              next()
            })

            onFinish(() => {
              finished.value = true
            })

            return {
              left,
              finished
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
#use-request-animation-frame-c-3 {
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
  flex-direction: column;

  .animating-item {
    padding: .5rem;
    width: 200px;
    border: 1px solid #ddd;
    background-color: #eee;
  }
}
</style>