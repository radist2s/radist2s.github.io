'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseKeys = require('./_baseKeys.js');

var _baseKeys2 = _interopRequireDefault(_baseKeys);

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArguments = require('./isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isPrototype = require('./_isPrototype.js');

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _isTypedArray = require('./isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if ((0, _isArrayLike2.default)(value) && ((0, _isArray2.default)(value) || typeof value == 'string' || typeof value.splice == 'function' || (0, _isBuffer2.default)(value) || (0, _isTypedArray2.default)(value) || (0, _isArguments2.default)(value))) {
    return !value.length;
  }
  var tag = (0, _getTag2.default)(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if ((0, _isPrototype2.default)(value)) {
    return !(0, _baseKeys2.default)(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

exports.default = isEmpty;
//# sourceMappingURL=isEmpty.js.map
