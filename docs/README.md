---
home: true
footer: MIT Licensed | Copyright © 2020-present Johnson
---

<ClientOnly>
  <action-button title="快速上手 →" link="https://yes-lee.github.io/beautiful-vue-hooks/quickStart/" />
</ClientOnly>

<ClientOnly>
  <home-demo />
</ClientOnly>

```javascript
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
```
