import createHandlerSetter from './utils/createHandlerSetter';
import { onMounted } from '@vue/composition-api';

type useGloubalEventOptions = {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

const defaultOptions: useGloubalEventOptions = {
  capture: false,
  once: false,
  passive: false,
};

export default function useGlobalEvent (eventName: string, options = defaultOptions, fn: any) {
  const [callbackRef, setCallbackRef] = createHandlerSetter(fn);
  const opts = { ...defaultOptions, ...(options || {}) };

  onMounted(() => {
    const cb = (event: Event) => {
      if (callbackRef.value) {
        callbackRef.value(event);
      }
    };

    if (callbackRef.value && eventName) {
      window.addEventListener(eventName, cb, opts);
    }

    return () => {
      if (eventName) {
        window.removeEventListener(eventName, cb, opts);
      }
    }
  })

  return setCallbackRef;
}
