# 快速开始

## 安装

```bash
yarn add beautiful-vue-hooks
// or
npm install beautiful-vue-hooks
```

## 使用

在vue2.x中使用需要先安装`@vue/composition-api`插件

```bash
yarn add @vue/composition-api
```

然后在main.js中注册`composition-api`插件

```javascript
// main.js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

在组件中使用`beautiful-vue-hooks`

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
