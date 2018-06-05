'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = require('./identity.js');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : _identity2.default;
}

exports.default = castFunction;
//# sourceMappingURL=_castFunction.js.map
