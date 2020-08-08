/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
declare const useMouseState: (selector?: string | undefined) => {
    clientX: import("@vue/composition-api").ComputedRef<number>;
    clientY: import("@vue/composition-api").ComputedRef<number>;
    screenX: import("@vue/composition-api").ComputedRef<number>;
    screenY: import("@vue/composition-api").ComputedRef<number>;
};
export default useMouseState;
//# sourceMappingURL=useMouseState.d.ts.map