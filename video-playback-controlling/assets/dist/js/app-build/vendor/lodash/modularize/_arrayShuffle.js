'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyArray = require('./_copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _shuffleSelf = require('./_shuffleSelf.js');

var _shuffleSelf2 = _interopRequireDefault(_shuffleSelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return (0, _shuffleSelf2.default)((0, _copyArray2.default)(array));
}

exports.default = arrayShuffle;
//# sourceMappingURL=_arrayShuffle.js.map
