"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
var defaultOptions = {
    leading: false,
    trailing: true,
};
function useThrottledFn(fn, wait, options) {
    if (wait === void 0) { wait = 100; }
    if (options === void 0) { options = defaultOptions; }
    return lodash_throttle_1.default(fn, wait, options);
}
exports.default = useThrottledFn;
//# sourceMappingURL=useThrottledFn.js.map