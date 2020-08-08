import useMouseEvents from './useMouseEvents';
import { reactive, computed } from '@vue/composition-api';

const createStateObject = (event: MouseEvent) => ({
  clientX: event.clientX,
  clientY: event.clientY,
  screenX: event.screenX,
  screenY: event.screenY,
});

/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
const useMouseState = (selector?: string) => {
  const state = reactive({ clientX: 0, clientY: 0, screenX: 0, screenY: 0 });
  const { onMouseMove } = useMouseEvents(selector);

  onMouseMove((event: MouseEvent) => {
    const nextState = createStateObject(event);
    state.clientX = nextState.clientX
    state.clientY = nextState.clientY
    state.screenX = nextState.screenX
    state.screenY = nextState.screenY
  });

  return {
    clientX: computed(() => state.clientX),
    clientY: computed(() => state.clientY),
    screenX: computed(() => state.screenX),
    screenY: computed(() => state.screenY),
  };
};

export default useMouseState;
