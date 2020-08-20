import { ref, computed } from '@vue/composition-api';
import safelyParseJson from './utils/safelyParseJson';
import isClient from './utils/isClient';
import isAPISupported from './utils/isAPISupported';

/**
 *
 */
const useStorage = (type: 'local' | 'session') => {
  const storageName = <'localStorage' | 'sessionStorage'>`${type}Storage`;

  if (isClient && !isAPISupported(storageName)) {
    // eslint-disable-next-line no-console
    console.warn(`${storageName} is not supported`);
  }

  /**
   * hook
   */
  return <T = any>(storageKey: string, defaultValue: T): [any, any] => {
    if (!isClient) {
      // eslint-disable-next-line no-console
      console.warn(`Please be aware that ${storageName} could not be available during SSR`);
      return [JSON.stringify(defaultValue), () => undefined];
    }

    const storage: Storage = window[storageName];
    const value = ref(safelyParseJson(storage.getItem(storageKey) || JSON.stringify(defaultValue)))

    storage.setItem(storageKey, JSON.stringify(value.value));

    const setValue = (v: any): void => {
      storage.setItem(storageKey, JSON.stringify(v));
      value.value = v
    }

    return [value, setValue];
  };
};

export default useStorage;
