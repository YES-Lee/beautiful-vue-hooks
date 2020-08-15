<template>
  <demo :code="code" lang="javascript">
    <div id="use-request-animation-frame-c-1">
      <div class="animating-item" :style="{ transform: `translateX(${left}px)` }">
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
    const left = ref(0)

    useRequestAnimationFrame((progress, next) => {
      left.value = progress
      next()
    })

    return {
      left: computed(() => left.value)
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

            useRequestAnimationFrame((progress, next) => {
              left.value = progress
              next()
            })

            return {
              left: computed(() => left.value)
            }
          }
        }
      `
    }
  }
}
</script>
<style lang="less" scoped>
#use-request-animation-frame-c-1 {
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
    width: 200px;
    border: 1px solid #ddd;
    background-color: #eee;
  }
}
</style>