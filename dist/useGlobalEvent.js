"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createHandlerSetter_1 = __importDefault(require("./utils/createHandlerSetter"));
var composition_api_1 = require("@vue/composition-api");
var defaultOptions = {
    capture: false,
    once: false,
    passive: false,
};
function useGlobalEvent(eventName, options, fn) {
    if (options === void 0) { options = defaultOptions; }
    var _a = createHandlerSetter_1.default(fn), callbackRef = _a[0], setCallbackRef = _a[1];
    var opts = __assign(__assign({}, defaultOptions), (options || {}));
    composition_api_1.onMounted(function () {
        var cb = function (event) {
            if (callbackRef.value) {
                callbackRef.value(event);
            }
        };
        if (callbackRef.value && eventName) {
            window.addEventListener(eventName, cb, opts);
        }
        return function () {
            if (eventName) {
                window.removeEventListener(eventName, cb, opts);
            }
        };
    });
    return setCallbackRef;
}
exports.default = useGlobalEvent;
//# sourceMappingURL=useGlobalEvent.js.map