'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSetToString = require('./_baseSetToString.js');

var _baseSetToString2 = _interopRequireDefault(_baseSetToString);

var _shortOut = require('./_shortOut.js');

var _shortOut2 = _interopRequireDefault(_shortOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = (0, _shortOut2.default)(_baseSetToString2.default);

exports.default = setToString;
//# sourceMappingURL=_setToString.js.map
