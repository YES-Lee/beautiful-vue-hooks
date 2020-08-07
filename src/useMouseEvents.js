import { onMounted, onUnmounted } from '@vue/composition-api'
import createHandlerSetter from './utils/createHandlerSetter';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';

const assignMouseEventOnMount = (selector, handlerRef, eventName) => {
  onMounted(() => {
    const cb = (mouseEvent) => {
      if (handlerRef.value) {
        handlerRef.value(mouseEvent);
      }
    };
    let target = document.querySelector(selector)

    if (selector === null) {
      target = document;
    }

    if (target) {
      if (target && target.addEventListener) {
        target.addEventListener(eventName, cb);
      }
    }
    onUnmounted(() => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventName, cb);
      }
    })
  })
};

/**
 * 返回一个frozen对象，里面包含了不同鼠标事件的监听器
 * 由于在setup阶段DOM节点还没有实例化，参数只能接收字符串来查询DOM节点，查询方式为document.querySelector
 */
const useMouseEvents = (selector = null) => {

  const [onMouseDownHandler, setOnMouseDown] = createHandlerSetter();
  const [onMouseEnterHandler, setOnMouseEnter] = createHandlerSetter();
  const [onMouseLeaveHandler, setOnMouseLeave] = createHandlerSetter();
  const [onMouseMoveHandler, setOnMouseMove] = createHandlerSetter();
  const [onMouseOutHandler, setOnMouseOut] = createHandlerSetter();
  const [onMouseOverHandler, setOnMouseOver] = createHandlerSetter();
  const [onMouseUpHandler, setOnMouseUp] = createHandlerSetter();

  if (selector !== null && typeof selector !== 'string') {
    return createCbSetterErrorProxy('mouse event selector must be a string value');
  }

  assignMouseEventOnMount(selector, onMouseDownHandler, 'mousedown');
  assignMouseEventOnMount(selector, onMouseEnterHandler, 'mouseenter');
  assignMouseEventOnMount(selector, onMouseLeaveHandler, 'mouseleave');
  assignMouseEventOnMount(selector, onMouseMoveHandler, 'mousemove');
  assignMouseEventOnMount(selector, onMouseOutHandler, 'mouseout');
  assignMouseEventOnMount(selector, onMouseOverHandler, 'mouseover');
  assignMouseEventOnMount(selector, onMouseUpHandler, 'mouseup');

  return Object.freeze({
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp,
  });
};

export default useMouseEvents;
