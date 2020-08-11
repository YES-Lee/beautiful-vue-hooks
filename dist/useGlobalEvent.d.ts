declare type useGloubalEventOptions = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
};
export default function useGlobalEvent(eventName: string, options: useGloubalEventOptions | undefined, fn: any): (nextCallback: any) => void;
export {};
//# sourceMappingURL=useGlobalEvent.d.ts.map