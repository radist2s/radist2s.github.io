'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = require('./_castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _isArguments = require('./isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isIndex = require('./_isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isLength = require('./isLength.js');

var _isLength2 = _interopRequireDefault(_isLength);

var _toKey = require('./_toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0, _castPath2.default)(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = (0, _toKey2.default)(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0, _isLength2.default)(length) && (0, _isIndex2.default)(key, length) && ((0, _isArray2.default)(object) || (0, _isArguments2.default)(object));
}

exports.default = hasPath;
//# sourceMappingURL=_hasPath.js.map
