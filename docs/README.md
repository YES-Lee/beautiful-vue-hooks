---
home: true
footer: MIT Licensed | Copyright © 2020-present Johnson
---

<action-button title="快速上手 →" link="https://yes-lee.github.io/beautiful-vue-hooks/quickStart/" />

<home-demo />

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
