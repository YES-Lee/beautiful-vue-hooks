import { ComputedRef } from '@vue/composition-api';
/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
declare const useMouseState: (selector?: string | undefined) => {
    clientX: ComputedRef<number>;
    clientY: ComputedRef<number>;
    screenX: ComputedRef<number>;
    screenY: ComputedRef<number>;
};
export default useMouseState;
//# sourceMappingURL=useMouseState.d.ts.map