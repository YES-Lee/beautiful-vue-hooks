"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exports a boolean value reporting whether the given API is supported or not
 */
var isApiSupported = function (api) { return (api in window); };
exports.default = isApiSupported;
//# sourceMappingURL=isAPISupported.js.map