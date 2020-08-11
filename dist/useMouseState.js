"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useMouseEvents_1 = __importDefault(require("./useMouseEvents"));
var composition_api_1 = require("@vue/composition-api");
/**
 * 返回鼠标当前位置状态
 * 接收一个目标的ID
 * 如果目标查询不到，则会注册事件到document
 */
var useMouseState = function (selector) {
    var state = composition_api_1.reactive({ clientX: 0, clientY: 0, screenX: 0, screenY: 0 });
    var onMouseMove = useMouseEvents_1.default(selector).onMouseMove;
    onMouseMove(function (event) {
        state.clientX = event.clientX;
        state.clientY = event.clientY;
        state.screenX = event.screenX;
        state.screenY = event.screenY;
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