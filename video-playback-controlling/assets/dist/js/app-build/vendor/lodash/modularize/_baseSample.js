'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arraySample = require('./_arraySample.js');

var _arraySample2 = _interopRequireDefault(_arraySample);

var _values = require('./values.js');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.sample`.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 */
function baseSample(collection) {
  return (0, _arraySample2.default)((0, _values2.default)(collection));
}

exports.default = baseSample;
//# sourceMappingURL=_baseSample.js.map
