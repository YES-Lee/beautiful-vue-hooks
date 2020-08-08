---
home: true
footer: MIT Licensed | Copyright © 2020-present Johnson
---

<ClientOnly>
  <action-button title="快速上手 →" link="/quickStart/" />
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
