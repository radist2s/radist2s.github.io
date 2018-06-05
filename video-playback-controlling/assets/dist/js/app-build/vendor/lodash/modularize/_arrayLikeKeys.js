'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseTimes = require('./_baseTimes.js');

var _baseTimes2 = _interopRequireDefault(_baseTimes);

var _isArguments = require('./isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isIndex = require('./_isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isTypedArray = require('./isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0, _isArray2.default)(value),
      isArg = !isArr && (0, _isArguments2.default)(value),
      isBuff = !isArr && !isArg && (0, _isBuffer2.default)(value),
      isType = !isArr && !isArg && !isBuff && (0, _isTypedArray2.default)(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0, _baseTimes2.default)(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    (0, _isIndex2.default)(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

exports.default = arrayLikeKeys;
//# sourceMappingURL=_arrayLikeKeys.js.map
