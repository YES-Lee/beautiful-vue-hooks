import useGlobalEvent from './useGlobalEvent';

const useWindowResize = (handler: any) => useGlobalEvent('resize', undefined, handler);

export default useWindowResize;
