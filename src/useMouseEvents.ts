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
 * Returns a frozen object of callback setters to handle the mouse events.<br/>
 * It accepts a DOM id to query the events target. <br/>
 * If a target is not exist the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useMouseEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useMouseEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useMouseEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
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
