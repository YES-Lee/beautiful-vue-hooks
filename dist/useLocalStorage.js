"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useStorage_1 = __importDefault(require("./useStorage"));
/**
 * Save a value on local storage
 */
var useLocalStorage = useStorage_1.default('local');
exports.default = useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map