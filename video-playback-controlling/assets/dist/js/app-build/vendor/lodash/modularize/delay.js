'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseDelay = require('./_baseDelay.js');

var _baseDelay2 = _interopRequireDefault(_baseDelay);

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _toNumber = require('./toNumber.js');

var _toNumber2 = _interopRequireDefault(_toNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = (0, _baseRest2.default)(function (func, wait, args) {
  return (0, _baseDelay2.default)(func, (0, _toNumber2.default)(wait) || 0, args);
}); /**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
exports.default = delay;
//# sourceMappingURL=delay.js.map
