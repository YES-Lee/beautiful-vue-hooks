# 快速开始

[Hook](https://zh-hans.reactjs.org/docs/hooks-overview.html)最初是react在16.8版本中正式发布的一个特性，后来随着vue-next对react的借鉴，通过[@vue/composition-api](https://github.com/vuejs/composition-api)插件，我们可以仿照react封装一些hook，一定程度上替换mixin，作为新的逻辑复用解决方案。

这是一个使用[@vue/composition-api](https://github.com/vuejs/composition-api)开发的hook集合，包含了web应用中常用的功能逻辑，通过简单的一行代码取代重复啰嗦的代码，提高开发效率。

::: warning
在使用`beautiful-vue-hooks`之前，需要先了解[@vue/composition-api](https://github.com/vuejs/composition-api)，并且在项目中注册该插件。
:::

```bash
yarn add @vue/composition-api
```

```javascript
// main.js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

## 安装

```bash
yarn add beautiful-vue-hooks
// or
npm install beautiful-vue-hooks
```

## 使用

```javascript
import { useMouseEvents } from 'beautiful-vue-hooks'

export default {
  setup() {
    const { onMouseMove } = useMouseEvents('#element-id')
    onMouseMove($event => {
      // ...
    })
  }
}
```
