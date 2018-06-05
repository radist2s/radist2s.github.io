'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stack = require('./_Stack.js');

var _Stack2 = _interopRequireDefault(_Stack);

var _equalArrays = require('./_equalArrays.js');

var _equalArrays2 = _interopRequireDefault(_equalArrays);

var _equalByTag = require('./_equalByTag.js');

var _equalByTag2 = _interopRequireDefault(_equalByTag);

var _equalObjects = require('./_equalObjects.js');

var _equalObjects2 = _interopRequireDefault(_equalObjects);

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isTypedArray = require('./isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0, _isArray2.default)(object),
      othIsArr = (0, _isArray2.default)(other),
      objTag = objIsArr ? arrayTag : (0, _getTag2.default)(object),
      othTag = othIsArr ? arrayTag : (0, _getTag2.default)(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && (0, _isBuffer2.default)(object)) {
    if (!(0, _isBuffer2.default)(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack2.default());
    return objIsArr || (0, _isTypedArray2.default)(object) ? (0, _equalArrays2.default)(object, other, bitmask, customizer, equalFunc, stack) : (0, _equalByTag2.default)(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack2.default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack2.default());
  return (0, _equalObjects2.default)(object, other, bitmask, customizer, equalFunc, stack);
}

exports.default = baseIsEqualDeep;
//# sourceMappingURL=_baseIsEqualDeep.js.map
