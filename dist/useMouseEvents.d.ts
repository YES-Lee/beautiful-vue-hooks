/**
 * Returns a frozen object of callback setters to handle the mouse events.<br/>
 * It accepts a DOM id to query the events target. <br/>
 * If a target is not exist the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useMouseEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useMouseEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useMouseEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 *
 */
declare const useMouseEvents: (selector?: string | undefined) => any;
export default useMouseEvents;
//# sourceMappingURL=useMouseEvents.d.ts.map