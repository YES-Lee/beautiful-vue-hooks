"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var safelyParseJson = function (parseString) {
    try {
        return JSON.parse(parseString);
    }
    catch (e) {
        return null;
    }
};
exports.default = safelyParseJson;
//# sourceMappingURL=safelyParseJson.js.map