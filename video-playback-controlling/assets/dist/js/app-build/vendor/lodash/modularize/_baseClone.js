'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stack = require('./_Stack.js');

var _Stack2 = _interopRequireDefault(_Stack);

var _arrayEach = require('./_arrayEach.js');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _assignValue = require('./_assignValue.js');

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseAssign = require('./_baseAssign.js');

var _baseAssign2 = _interopRequireDefault(_baseAssign);

var _baseAssignIn = require('./_baseAssignIn.js');

var _baseAssignIn2 = _interopRequireDefault(_baseAssignIn);

var _cloneBuffer = require('./_cloneBuffer.js');

var _cloneBuffer2 = _interopRequireDefault(_cloneBuffer);

var _copyArray = require('./_copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _copySymbols = require('./_copySymbols.js');

var _copySymbols2 = _interopRequireDefault(_copySymbols);

var _copySymbolsIn = require('./_copySymbolsIn.js');

var _copySymbolsIn2 = _interopRequireDefault(_copySymbolsIn);

var _getAllKeys = require('./_getAllKeys.js');

var _getAllKeys2 = _interopRequireDefault(_getAllKeys);

var _getAllKeysIn = require('./_getAllKeysIn.js');

var _getAllKeysIn2 = _interopRequireDefault(_getAllKeysIn);

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _initCloneArray = require('./_initCloneArray.js');

var _initCloneArray2 = _interopRequireDefault(_initCloneArray);

var _initCloneByTag = require('./_initCloneByTag.js');

var _initCloneByTag2 = _interopRequireDefault(_initCloneByTag);

var _initCloneObject = require('./_initCloneObject.js');

var _initCloneObject2 = _interopRequireDefault(_initCloneObject);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0, _isObject2.default)(value)) {
    return value;
  }
  var isArr = (0, _isArray2.default)(value);
  if (isArr) {
    result = (0, _initCloneArray2.default)(value);
    if (!isDeep) {
      return (0, _copyArray2.default)(value, result);
    }
  } else {
    var tag = (0, _getTag2.default)(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0, _isBuffer2.default)(value)) {
      return (0, _cloneBuffer2.default)(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0, _initCloneObject2.default)(value);
      if (!isDeep) {
        return isFlat ? (0, _copySymbolsIn2.default)(value, (0, _baseAssignIn2.default)(result, value)) : (0, _copySymbols2.default)(value, (0, _baseAssign2.default)(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0, _initCloneByTag2.default)(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack2.default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull ? isFlat ? _getAllKeysIn2.default : _getAllKeys2.default : isFlat ? keysIn : _keys2.default;

  var props = isArr ? undefined : keysFunc(value);
  (0, _arrayEach2.default)(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0, _assignValue2.default)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

exports.default = baseClone;
//# sourceMappingURL=_baseClone.js.map
