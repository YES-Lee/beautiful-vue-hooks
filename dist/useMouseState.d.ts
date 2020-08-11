import { ComputedRef } from '@vue/composition-api';
/**
 * 返回鼠标当前位置状态
 * 接收一个目标的ID
 * 如果目标查询不到，则会注册事件到document
 */
declare const useMouseState: (selector?: string | undefined) => {
    clientX: ComputedRef<number>;
    clientY: ComputedRef<number>;
    screenX: ComputedRef<number>;
    screenY: ComputedRef<number>;
};
export default useMouseState;
//# sourceMappingURL=useMouseState.d.ts.map