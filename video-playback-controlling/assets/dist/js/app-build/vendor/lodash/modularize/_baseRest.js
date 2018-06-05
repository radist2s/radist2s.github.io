'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = require('./identity.js');

var _identity2 = _interopRequireDefault(_identity);

var _overRest = require('./_overRest.js');

var _overRest2 = _interopRequireDefault(_overRest);

var _setToString = require('./_setToString.js');

var _setToString2 = _interopRequireDefault(_setToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0, _setToString2.default)((0, _overRest2.default)(func, start, _identity2.default), func + '');
}

exports.default = baseRest;
//# sourceMappingURL=_baseRest.js.map
