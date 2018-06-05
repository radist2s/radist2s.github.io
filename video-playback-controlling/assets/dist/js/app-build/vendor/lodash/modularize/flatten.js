'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFlatten = require('./_baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? (0, _baseFlatten2.default)(array, 1) : [];
}

exports.default = flatten;
//# sourceMappingURL=flatten.js.map
