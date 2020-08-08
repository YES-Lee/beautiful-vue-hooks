"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useMouseEvents_1 = __importDefault(require("./useMouseEvents"));
var composition_api_1 = require("@vue/composition-api");
var createStateObject = function (event) { return ({
    clientX: event.clientX,
    clientY: event.clientY,
    screenX: event.screenX,
    screenY: event.screenY,
}); };
/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
var useMouseState = function (selector) {
    var state = composition_api_1.reactive({ clientX: 0, clientY: 0, screenX: 0, screenY: 0 });
    var onMouseMove = useMouseEvents_1.default(selector).onMouseMove;
    onMouseMove(function (event) {
        var nextState = createStateObject(event);
        state.clientX = nextState.clientX;
        state.clientY = nextState.clientY;
        state.screenX = nextState.screenX;
        state.screenY = nextState.screenY;
    });
    return {
        clientX: composition_api_1.computed(function () { return state.clientX; }),
        clientY: composition_api_1.computed(function () { return state.clientY; }),
        screenX: composition_api_1.computed(function () { return state.screenX; }),
        screenY: composition_api_1.computed(function () { return state.screenY; }),
    };
};
exports.default = useMouseState;
//# sourceMappingURL=useMouseState.js.map