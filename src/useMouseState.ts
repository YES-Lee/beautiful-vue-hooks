import useMouseEvents from './useMouseEvents';
import { reactive, computed, ComputedRef } from '@vue/composition-api';

/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
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
