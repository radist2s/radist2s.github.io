'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEach = require('./_arrayEach.js');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _arrayIncludes = require('./_arrayIncludes.js');

var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  (0, _arrayEach2.default)(wrapFlags, function (pair) {
    var value = '_.' + pair[0];
    if (bitmask & pair[1] && !(0, _arrayIncludes2.default)(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

exports.default = updateWrapDetails;
//# sourceMappingURL=_updateWrapDetails.js.map
