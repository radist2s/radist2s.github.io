'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRandom = require('./_baseRandom.js');

var _baseRandom2 = _interopRequireDefault(_baseRandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `_.sample` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
function arraySample(array) {
  var length = array.length;
  return length ? array[(0, _baseRandom2.default)(0, length - 1)] : undefined;
}

exports.default = arraySample;
//# sourceMappingURL=_arraySample.js.map
