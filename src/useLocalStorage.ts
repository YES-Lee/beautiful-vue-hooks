import useStorage from './useStorage';

/**
 * Save a value on local storage
 */
const useLocalStorage: <T = any>(storageKey: string, defaultValue: T) => [any, any] = useStorage('local');

export default useLocalStorage;
