'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToString = require('./_baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0, _baseToString2.default)(value);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = toString;
//# sourceMappingURL=toString.js.map
