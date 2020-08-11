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
 * 返回一个冻结的事件注册器<br/>
 * 接收目标ID<br/>
 * 如果目标查询不到，则会注册事件到`document`
 * <br/>
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