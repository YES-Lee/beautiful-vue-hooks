<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot />
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{code}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <!-- <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon> -->
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    props: {
      code: String
    }
  }
</script>

<style lang="less" scoped>

</style>