"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useMouseEvents_1 = __importDefault(require("./useMouseEvents"));
var useMouseState_1 = __importDefault(require("./useMouseState"));
/**
 * Returns an array where the first item is the mouse state from the `useMouseState` hook and the second item
 * is the object of callback setters from the `useMouseEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
var useMouse = function (selector) {
    var state = useMouseState_1.default(selector);
    var events = useMouseEvents_1.default(selector);
    return [state, events];
};
exports.default = useMouse;
//# sourceMappingURL=useMouse.js.map