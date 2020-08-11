import useGlobalEvent from './useGlobalEvent';

const useWindowScroll = (handler: any) => useGlobalEvent('scroll', undefined, handler);

export default useWindowScroll;
