<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot />
      </div>
      <div class="code-content" style="height: 0;" ref="content">
        <div class="code-content-height" ref="contentHeight">
          <pre><code :class="`language-${lang}`">{{code.replace(/^ {8}/gm, '').trim()}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode">
        <!-- <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon> -->
        <span class="lock-code-word">{{isShow ? '隐藏代码' : '显示代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      code: {
        type: String,
        default: ''
      },
      lang: String
    },
    data () {
      return {
        //每一个区域的高度
        codeParent: null,
        codeHeight: 0,
        //每个区域的显示状态
        isShow: false,
      }
    },
    mounted () {
      //异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
      this.$nextTick(() => {
        this.getCodesHeight()
      })
    },
    methods: {
      //根据子元素的高度 设置代码区域父元素的高度
      showCode () {
        this.isShow = !this.isShow
        this.$nextTick(() => {
          if (this.isShow) {
            this.codeParent.style.height = +this.codeHeight + 25 + 'px'
          } else {
            this.codeParent.style.height = 0
          }
        })
      },
      //得到所有代码区域的高度
      getCodesHeight () {
        const contentHeight = this.$refs.contentHeight
        this.$highlight(contentHeight)
        this.codeParent = this.$refs.content
        this.codeHeight = contentHeight.getBoundingClientRect().height
        this.isShow = false
      },
    }
  }
</script>

<style lang="less" scoped>
.demo {
  margin: 1rem 0;
}
.theme-container.sidebar-open .sidebar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 0;
}
.sidebar, .navbar {
  z-index: 10000;
}

.component-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;

  .component-wrapper-demo {
    padding: 24px 24px 15px 24px;
  }

  h4 {
    margin: 55px 0 20px;
  }

  &:hover {
    // .lock-code .lock-code-word {
    //   font-size: 14px;
    //   transform: translateX(-40px);
    //   opacity: 1;
    // }

    // .lock-code .icon-down {
    //   transform: translateX(-40px);
    // }

    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
  }

  .code-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: height .2s;

    .code-content-height {
      .code-user-desc {
        background: #ffffff;
        margin: 10px 10px 0 10px;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 26px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
      }

      > pre {
        background: none;

        > code {
          color: #3182bd;
        }
      }
    }
  }

  .lock-code {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    line-height: 44px;
    color: #d3dce6;

    &:hover {
      background-color: #f9fafc;

      .lock-code-word {
        color: #409eff;
      }

      .icon-down {
        fill: #409eff;
      }
    }

    .icon-down {
      transform: translateX(0px);
      transition: all .1s;
    }

    text-align: center;

    .lock-code-word {
      // font-size: 0px;
      margin-left: 15px;
      display: inline-block;
      transition: all .1s;
      // opacity: 0;
    }
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #ccc;
}

::-webkit-scrollbar-track {
  border-radius: 2px;
  background-color: #f5f5f5;
}

</style>