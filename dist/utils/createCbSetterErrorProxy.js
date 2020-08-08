"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create setter error proxy
 */
var createCbSetterErrorProxy = function (errorMessage) { return new Proxy(Object.create(null), {
    get: function (target, property) {
        if (property && typeof property === 'string' && property.slice(0, 2) === 'on') {
            return function () {
                throw new Error(errorMessage);
            };
        }
        return { error: errorMessage };
    }
}); };
exports.default = createCbSetterErrorProxy;
//# sourceMappingURL=createCbSetterErrorProxy.js.map