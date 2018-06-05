'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsNative = require('./_baseIsNative.js');

var _baseIsNative2 = _interopRequireDefault(_baseIsNative);

var _isMaskable = require('./_isMaskable.js');

var _isMaskable2 = _interopRequireDefault(_isMaskable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Error message constants. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';

/**
 * Checks if `value` is a pristine native function.
 *
 * **Note:** This method can't reliably detect native functions in the presence
 * of the core-js package because core-js circumvents this kind of detection.
 * Despite multiple requests, the core-js maintainer has made it clear: any
 * attempt to fix the detection will be obstructed. As a result, we're left
 * with little choice but to throw an error. Unfortunately, this also affects
 * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
 * which rely on core-js.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if ((0, _isMaskable2.default)(value)) {
    throw new Error(CORE_ERROR_TEXT);
  }
  return (0, _baseIsNative2.default)(value);
}

exports.default = isNative;
//# sourceMappingURL=isNative.js.map
