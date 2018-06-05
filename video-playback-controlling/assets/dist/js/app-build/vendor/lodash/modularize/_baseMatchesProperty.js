'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsEqual = require('./_baseIsEqual.js');

var _baseIsEqual2 = _interopRequireDefault(_baseIsEqual);

var _get = require('./get.js');

var _get2 = _interopRequireDefault(_get);

var _hasIn = require('./hasIn.js');

var _hasIn2 = _interopRequireDefault(_hasIn);

var _isKey = require('./_isKey.js');

var _isKey2 = _interopRequireDefault(_isKey);

var _isStrictComparable = require('./_isStrictComparable.js');

var _isStrictComparable2 = _interopRequireDefault(_isStrictComparable);

var _matchesStrictComparable = require('./_matchesStrictComparable.js');

var _matchesStrictComparable2 = _interopRequireDefault(_matchesStrictComparable);

var _toKey = require('./_toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if ((0, _isKey2.default)(path) && (0, _isStrictComparable2.default)(srcValue)) {
    return (0, _matchesStrictComparable2.default)((0, _toKey2.default)(path), srcValue);
  }
  return function (object) {
    var objValue = (0, _get2.default)(object, path);
    return objValue === undefined && objValue === srcValue ? (0, _hasIn2.default)(object, path) : (0, _baseIsEqual2.default)(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

exports.default = baseMatchesProperty;
//# sourceMappingURL=_baseMatchesProperty.js.map
