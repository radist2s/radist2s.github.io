'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isKey = require('./_isKey.js');

var _isKey2 = _interopRequireDefault(_isKey);

var _stringToPath = require('./_stringToPath.js');

var _stringToPath2 = _interopRequireDefault(_stringToPath);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0, _isArray2.default)(value)) {
    return value;
  }
  return (0, _isKey2.default)(value, object) ? [value] : (0, _stringToPath2.default)((0, _toString2.default)(value));
}

exports.default = castPath;
//# sourceMappingURL=_castPath.js.map
