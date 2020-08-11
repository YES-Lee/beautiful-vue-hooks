---
home: true
heroImage: /logo.svg
heroText: Beautiful-Vue-Hooks
tagline: 为Vue3开发的一个优美的Hooks集合
actionText: 快速上手 →
actionLink: /quickStart/
features:
- title: 使用简单
  details: 一行简洁的代码搞定复杂操作。极速上手，零学习成本。
- title: 效率提升
  details: 摆脱重复啰嗦的代码，极大提升开发效率，降低维护成本。
- title: 丰富强大
  details: 封装了应用开发常用的逻辑、操作等，打造一个全能的集合。
footer: MIT Licensed | Copyright © 2020-present Johnson
---

<home-demo />

```javascript
import { useMouseState } from 'beautiful-vue-hooks'

export default {
  setup() {
    const { clientX, clientY } = useMouseState()
    return {
      clientX,
      clientY
    }
  }
}
```
