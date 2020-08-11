"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useGlobalEvent_1 = __importDefault(require("./useGlobalEvent"));
var useWindowScroll = function (handler) { return useGlobalEvent_1.default('scroll', undefined, handler); };
exports.default = useWindowScroll;
//# sourceMappingURL=useWindowScroll.js.map