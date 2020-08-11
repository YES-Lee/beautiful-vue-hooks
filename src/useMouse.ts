import useMouseEvents from './useMouseEvents';
import useMouseState from './useMouseState';

/**
 * `useMouseState`和`useMouseEvents`的组合
 */
const useMouse = (selector?: string) => {
  const state = useMouseState(selector);
  const events = useMouseEvents(selector);

  return [state, events];
};

export default useMouse;
