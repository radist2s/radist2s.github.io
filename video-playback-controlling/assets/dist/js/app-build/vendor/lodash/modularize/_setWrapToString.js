'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getWrapDetails = require('./_getWrapDetails.js');

var _getWrapDetails2 = _interopRequireDefault(_getWrapDetails);

var _insertWrapDetails = require('./_insertWrapDetails.js');

var _insertWrapDetails2 = _interopRequireDefault(_insertWrapDetails);

var _setToString = require('./_setToString.js');

var _setToString2 = _interopRequireDefault(_setToString);

var _updateWrapDetails = require('./_updateWrapDetails.js');

var _updateWrapDetails2 = _interopRequireDefault(_updateWrapDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + '';
  return (0, _setToString2.default)(wrapper, (0, _insertWrapDetails2.default)(source, (0, _updateWrapDetails2.default)((0, _getWrapDetails2.default)(source), bitmask)));
}

exports.default = setWrapToString;
//# sourceMappingURL=_setWrapToString.js.map
