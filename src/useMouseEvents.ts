import { onMounted, onUnmounted } from '@vue/composition-api'
import createHandlerSetter from './utils/createHandlerSetter'
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy'

const assignMouseEventOnMount = (selector: string | undefined, handlerRef: any, eventName: string) => {
  onMounted(() => {
    const cb = (mouseEvent: any) => {
      if (handlerRef.value) {
        handlerRef.value(mouseEvent)
      }
    }
    let target: any

    if (selector) {
      target = document.querySelector(selector)
    } else {
      target = window.document
    }

    if (target) {
      if (target && target.addEventListener) {
        target.addEventListener(eventName, cb)
      }
    }
    onUnmounted(() => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb)
      }
    })
  })
}

/**
 * 返回一个冻结的事件注册器<br/>
 * 接收目标ID<br/>
 * 如果目标查询不到，则会注册事件到`document`
 * <br/>
 *
 */
const useMouseEvents = (selector?: string): any => {
  const [onMouseDownHandler, setOnMouseDown] = createHandlerSetter()
  const [onMouseEnterHandler, setOnMouseEnter] = createHandlerSetter()
  const [onMouseLeaveHandler, setOnMouseLeave] = createHandlerSetter()
  const [onMouseMoveHandler, setOnMouseMove] = createHandlerSetter()
  const [onMouseOutHandler, setOnMouseOut] = createHandlerSetter()
  const [onMouseOverHandler, setOnMouseOver] = createHandlerSetter()
  const [onMouseUpHandler, setOnMouseUp] = createHandlerSetter()

  if (!!selector && typeof selector !== 'string') {
    return createCbSetterErrorProxy('mouse event selector must be a string value')
  }

  assignMouseEventOnMount(selector, onMouseDownHandler, 'mousedown')
  assignMouseEventOnMount(selector, onMouseEnterHandler, 'mouseenter')
  assignMouseEventOnMount(selector, onMouseLeaveHandler, 'mouseleave')
  assignMouseEventOnMount(selector, onMouseMoveHandler, 'mousemove')
  assignMouseEventOnMount(selector, onMouseOutHandler, 'mouseout')
  assignMouseEventOnMount(selector, onMouseOverHandler, 'mouseover')
  assignMouseEventOnMount(selector, onMouseUpHandler, 'mouseup')

  return Object.freeze({
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp
  })
}

export default useMouseEvents
