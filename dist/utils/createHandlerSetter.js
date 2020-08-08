"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var composition_api_1 = require("@vue/composition-api");
/**
 * Returns an array where the first item is the [ref](https://composition-api.vuejs.org/api.html#ref) to a
 * callback function and the second one is setter for that function.<br /><br />
 *
 * Although it function looks quite similar to the react [useState](https://reactjs.org/docs/hooks-reference.html#usestate),
 * hook, in this case the setter just makes sure the given callback is indeed a new function.<br /><br />
 * **Setting a callback ref does not imply your component to re-render.**<br /><br />
 *
 * `createHandlerSetter` is useful when abstracting other hooks to possibly implement handlers setters.
 */
var createHandlerSetter = function (handlerValue) {
    var handlerRef = composition_api_1.ref(handlerValue);
    // since ref accepts an initial-value only, this is needed to make sure
    handlerRef.value = handlerValue;
    var setHandler = function (nextCallback) {
        if (typeof nextCallback !== 'function') {
            throw new Error('the argument supplied to the \'setHandler\' function should be of type function');
        }
        handlerRef.value = nextCallback;
    };
    return [handlerRef, setHandler];
};
exports.default = createHandlerSetter;
//# sourceMappingURL=createHandlerSetter.js.map