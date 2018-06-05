'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = require('./_assignValue.js');

var _assignValue2 = _interopRequireDefault(_assignValue);

var _castPath = require('./_castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _isIndex = require('./_isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _toKey = require('./_toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!(0, _isObject2.default)(object)) {
    return object;
  }
  path = (0, _castPath2.default)(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = (0, _toKey2.default)(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = (0, _isObject2.default)(objValue) ? objValue : (0, _isIndex2.default)(path[index + 1]) ? [] : {};
      }
    }
    (0, _assignValue2.default)(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

exports.default = baseSet;
//# sourceMappingURL=_baseSet.js.map
