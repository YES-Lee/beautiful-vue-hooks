import useMouseEvents from './useMouseEvents';
import { reactive, computed, ComputedRef } from '@vue/composition-api';

/**
 * 返回鼠标当前位置状态
 * 接收一个目标的ID
 * 如果目标查询不到，则会注册事件到document
 */
const useMouseState = (selector?: string): { clientX: ComputedRef<number>; clientY: ComputedRef<number>; screenX: ComputedRef<number>; screenY: ComputedRef<number>} => {
  const state = reactive({ clientX: 0, clientY: 0, screenX: 0, screenY: 0 });
  const { onMouseMove } = useMouseEvents(selector);

  onMouseMove((event: MouseEvent) => {
    state.clientX = event.clientX
    state.clientY = event.clientY
    state.screenX = event.screenX
    state.screenY = event.screenY
  });

  return {
    clientX: computed<number>(() => state.clientX),
    clientY: computed<number>(() => state.clientY),
    screenX: computed<number>(() => state.screenX),
    screenY: computed<number>(() => state.screenY),
  };
};

export default useMouseState;
