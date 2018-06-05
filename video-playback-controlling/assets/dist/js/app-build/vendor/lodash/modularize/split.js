'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToString = require('./_baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

var _castSlice = require('./_castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _hasUnicode = require('./_hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _isIterateeCall = require('./_isIterateeCall.js');

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

var _isRegExp = require('./isRegExp.js');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _stringToArray = require('./_stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * _.split('a-b-c', '-', 2);
 * // => ['a', 'b']
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function split(string, separator, limit) {
  if (limit && typeof limit != 'number' && (0, _isIterateeCall2.default)(string, separator, limit)) {
    separator = limit = undefined;
  }
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit) {
    return [];
  }
  string = (0, _toString2.default)(string);
  if (string && (typeof separator == 'string' || separator != null && !(0, _isRegExp2.default)(separator))) {
    separator = (0, _baseToString2.default)(separator);
    if (!separator && (0, _hasUnicode2.default)(string)) {
      return (0, _castSlice2.default)((0, _stringToArray2.default)(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}

exports.default = split;
//# sourceMappingURL=split.js.map
