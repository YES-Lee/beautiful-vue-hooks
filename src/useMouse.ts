import useMouseEvents from './useMouseEvents';
import useMouseState from './useMouseState';

/**
 * Returns an array where the first item is the mouse state from the `useMouseState` hook and the second item
 * is the object of callback setters from the `useMouseEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
const useMouse = (selector?: string) => {
  const state = useMouseState(selector);
  const events = useMouseEvents(selector);

  return [state, events];
};

export default useMouse;
