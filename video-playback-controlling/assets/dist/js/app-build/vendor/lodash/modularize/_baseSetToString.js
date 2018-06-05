'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constant = require('./constant.js');

var _constant2 = _interopRequireDefault(_constant);

var _defineProperty = require('./_defineProperty.js');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _identity = require('./identity.js');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty2.default ? _identity2.default : function (func, string) {
  return (0, _defineProperty2.default)(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': (0, _constant2.default)(string),
    'writable': true
  });
};

exports.default = baseSetToString;
//# sourceMappingURL=_baseSetToString.js.map
