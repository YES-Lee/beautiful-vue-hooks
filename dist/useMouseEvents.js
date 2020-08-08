"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var composition_api_1 = require("@vue/composition-api");
var createHandlerSetter_1 = __importDefault(require("./utils/createHandlerSetter"));
var createCbSetterErrorProxy_1 = __importDefault(require("./utils/createCbSetterErrorProxy"));
var assignMouseEventOnMount = function (selector, handlerRef, eventName) {
    composition_api_1.onMounted(function () {
        var cb = function (mouseEvent) {
            if (handlerRef.value) {
                handlerRef.value(mouseEvent);
            }
        };
        var target;
        if (selector) {
            target = document.querySelector(selector);
        }
        else {
            target = window.document;
        }
        if (target) {
            if (target && target.addEventListener) {
                target.addEventListener(eventName, cb);
            }
        }
        composition_api_1.onUnmounted(function () {
            if (target && target.removeEventListener) {
                target.removeEventListener(eventName, cb);
            }
        });
    });
};
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
var useMouseEvents = function (selector) {
    var _a = createHandlerSetter_1.default(), onMouseDownHandler = _a[0], setOnMouseDown = _a[1];
    var _b = createHandlerSetter_1.default(), onMouseEnterHandler = _b[0], setOnMouseEnter = _b[1];
    var _c = createHandlerSetter_1.default(), onMouseLeaveHandler = _c[0], setOnMouseLeave = _c[1];
    var _d = createHandlerSetter_1.default(), onMouseMoveHandler = _d[0], setOnMouseMove = _d[1];
    var _e = createHandlerSetter_1.default(), onMouseOutHandler = _e[0], setOnMouseOut = _e[1];
    var _f = createHandlerSetter_1.default(), onMouseOverHandler = _f[0], setOnMouseOver = _f[1];
    var _g = createHandlerSetter_1.default(), onMouseUpHandler = _g[0], setOnMouseUp = _g[1];
    if (!!selector && typeof selector !== 'string') {
        return createCbSetterErrorProxy_1.default('mouse event selector must be a string value');
    }
    assignMouseEventOnMount(selector, onMouseDownHandler, 'mousedown');
    assignMouseEventOnMount(selector, onMouseEnterHandler, 'mouseenter');
    assignMouseEventOnMount(selector, onMouseLeaveHandler, 'mouseleave');
    assignMouseEventOnMount(selector, onMouseMoveHandler, 'mousemove');
    assignMouseEventOnMount(selector, onMouseOutHandler, 'mouseout');
    assignMouseEventOnMount(selector, onMouseOverHandler, 'mouseover');
    assignMouseEventOnMount(selector, onMouseUpHandler, 'mouseup');
    return Object.freeze({
        onMouseDown: setOnMouseDown,
        onMouseEnter: setOnMouseEnter,
        onMouseLeave: setOnMouseLeave,
        onMouseMove: setOnMouseMove,
        onMouseOut: setOnMouseOut,
        onMouseOver: setOnMouseOver,
        onMouseUp: setOnMouseUp
    });
};
exports.default = useMouseEvents;
//# sourceMappingURL=useMouseEvents.js.map