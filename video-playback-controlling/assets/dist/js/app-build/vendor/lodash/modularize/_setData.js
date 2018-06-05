'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSetData = require('./_baseSetData.js');

var _baseSetData2 = _interopRequireDefault(_baseSetData);

var _shortOut = require('./_shortOut.js');

var _shortOut2 = _interopRequireDefault(_shortOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = (0, _shortOut2.default)(_baseSetData2.default);

exports.default = setData;
//# sourceMappingURL=_setData.js.map
