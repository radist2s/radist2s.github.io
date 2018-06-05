'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseClamp = require('./_baseClamp.js');

var _baseClamp2 = _interopRequireDefault(_baseClamp);

var _shuffleSelf = require('./_shuffleSelf.js');

var _shuffleSelf2 = _interopRequireDefault(_shuffleSelf);

var _values = require('./values.js');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.sampleSize` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function baseSampleSize(collection, n) {
  var array = (0, _values2.default)(collection);
  return (0, _shuffleSelf2.default)(array, (0, _baseClamp2.default)(n, 0, array.length));
}

exports.default = baseSampleSize;
//# sourceMappingURL=_baseSampleSize.js.map
