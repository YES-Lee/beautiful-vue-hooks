import useStorage from './useStorage';

const useLocalStorage: <T = any>(storageKey: string, defaultValue: T) => [any, any] = useStorage('local');

export default useLocalStorage;
