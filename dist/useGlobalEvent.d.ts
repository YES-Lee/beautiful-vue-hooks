declare type useGloubalEventOptions = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
};
/**
 * Accepts an event name then returns a callback setter for a function to be performed when the event triggers.
 */
export default function useGlobalEvent(eventName: string, options: useGloubalEventOptions | undefined, fn: any): (nextCallback: any) => void;
export {};
//# sourceMappingURL=useGlobalEvent.d.ts.map