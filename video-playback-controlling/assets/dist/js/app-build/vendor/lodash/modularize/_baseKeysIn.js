'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _isPrototype = require('./_isPrototype.js');

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _nativeKeysIn = require('./_nativeKeysIn.js');

var _nativeKeysIn2 = _interopRequireDefault(_nativeKeysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0, _isObject2.default)(object)) {
    return (0, _nativeKeysIn2.default)(object);
  }
  var isProto = (0, _isPrototype2.default)(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

exports.default = baseKeysIn;
//# sourceMappingURL=_baseKeysIn.js.map
