'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsEqualDeep = require('./_baseIsEqualDeep.js');

var _baseIsEqualDeep2 = _interopRequireDefault(_baseIsEqualDeep);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !(0, _isObjectLike2.default)(value) && !(0, _isObjectLike2.default)(other)) {
    return value !== value && other !== other;
  }
  return (0, _baseIsEqualDeep2.default)(value, other, bitmask, customizer, baseIsEqual, stack);
}

exports.default = baseIsEqual;
//# sourceMappingURL=_baseIsEqual.js.map
