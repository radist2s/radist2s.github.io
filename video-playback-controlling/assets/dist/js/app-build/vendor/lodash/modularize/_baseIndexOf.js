'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFindIndex = require('./_baseFindIndex.js');

var _baseFindIndex2 = _interopRequireDefault(_baseFindIndex);

var _baseIsNaN = require('./_baseIsNaN.js');

var _baseIsNaN2 = _interopRequireDefault(_baseIsNaN);

var _strictIndexOf = require('./_strictIndexOf.js');

var _strictIndexOf2 = _interopRequireDefault(_strictIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value ? (0, _strictIndexOf2.default)(array, value, fromIndex) : (0, _baseFindIndex2.default)(array, _baseIsNaN2.default, fromIndex);
}

exports.default = baseIndexOf;
//# sourceMappingURL=_baseIndexOf.js.map
