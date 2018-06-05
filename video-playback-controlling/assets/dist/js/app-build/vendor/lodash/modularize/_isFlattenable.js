'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = require('./_Symbol.js');

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _isArguments = require('./isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var spreadableSymbol = _Symbol3.default ? _Symbol3.default.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0, _isArray2.default)(value) || (0, _isArguments2.default)(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

exports.default = isFlattenable;
//# sourceMappingURL=_isFlattenable.js.map
