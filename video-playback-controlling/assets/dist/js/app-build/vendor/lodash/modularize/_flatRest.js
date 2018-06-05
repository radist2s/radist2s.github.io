'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flatten = require('./flatten.js');

var _flatten2 = _interopRequireDefault(_flatten);

var _overRest = require('./_overRest.js');

var _overRest2 = _interopRequireDefault(_overRest);

var _setToString = require('./_setToString.js');

var _setToString2 = _interopRequireDefault(_setToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return (0, _setToString2.default)((0, _overRest2.default)(func, undefined, _flatten2.default), func + '');
}

exports.default = flatRest;
//# sourceMappingURL=_flatRest.js.map
