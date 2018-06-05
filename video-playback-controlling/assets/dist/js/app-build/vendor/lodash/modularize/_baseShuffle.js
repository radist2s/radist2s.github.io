'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shuffleSelf = require('./_shuffleSelf.js');

var _shuffleSelf2 = _interopRequireDefault(_shuffleSelf);

var _values = require('./values.js');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return (0, _shuffleSelf2.default)((0, _values2.default)(collection));
}

exports.default = baseShuffle;
//# sourceMappingURL=_baseShuffle.js.map
