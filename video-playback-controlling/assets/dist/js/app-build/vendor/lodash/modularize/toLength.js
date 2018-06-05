'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseClamp = require('./_baseClamp.js');

var _baseClamp2 = _interopRequireDefault(_baseClamp);

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for the maximum length and index of an array. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */
function toLength(value) {
  return value ? (0, _baseClamp2.default)((0, _toInteger2.default)(value), 0, MAX_ARRAY_LENGTH) : 0;
}

exports.default = toLength;
//# sourceMappingURL=toLength.js.map
