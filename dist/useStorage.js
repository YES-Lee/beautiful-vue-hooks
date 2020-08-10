"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var composition_api_1 = require("@vue/composition-api");
var safelyParseJson_1 = __importDefault(require("./utils/safelyParseJson"));
var isClient_1 = __importDefault(require("./utils/isClient"));
var isAPISupported_1 = __importDefault(require("./utils/isAPISupported"));
var isDevelopment_1 = __importDefault(require("./utils/isDevelopment"));
/**
 *
 */
var useStorage = function (type) {
    var storageName = type + "Storage";
    if (isClient_1.default && !isAPISupported_1.default(storageName)) {
        // eslint-disable-next-line no-console
        console.warn(storageName + " is not supported");
    }
    /**
     * hook
     */
    return function (storageKey, defaultValue) {
        if (!isClient_1.default) {
            if (isDevelopment_1.default) {
                // eslint-disable-next-line no-console
                console.warn("Please be aware that " + storageName + " could not be available during SSR");
            }
            return [JSON.stringify(defaultValue), function () { return undefined; }];
        }
        var storage = window[storageName];
        var value = composition_api_1.ref(safelyParseJson_1.default(storage.getItem(storageKey) || JSON.stringify(defaultValue)));
        storage.setItem(storageKey, JSON.stringify(value.value));
        var setValue = function (v) {
            storage.setItem(storageKey, JSON.stringify(v));
        };
        return [composition_api_1.computed(function () { return value.value; }), setValue];
    };
};
exports.default = useStorage;
//# sourceMappingURL=useStorage.js.map