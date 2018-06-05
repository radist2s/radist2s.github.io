'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseClamp = require('./_baseClamp.js');

var _baseClamp2 = _interopRequireDefault(_baseClamp);

var _copyArray = require('./_copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _shuffleSelf = require('./_shuffleSelf.js');

var _shuffleSelf2 = _interopRequireDefault(_shuffleSelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `_.sampleSize` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function arraySampleSize(array, n) {
  return (0, _shuffleSelf2.default)((0, _copyArray2.default)(array), (0, _baseClamp2.default)(n, 0, array.length));
}

exports.default = arraySampleSize;
//# sourceMappingURL=_arraySampleSize.js.map
