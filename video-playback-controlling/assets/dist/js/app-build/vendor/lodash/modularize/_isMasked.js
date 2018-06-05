'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreJsData = require('./_coreJsData.js');

var _coreJsData2 = _interopRequireDefault(_coreJsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData2.default && _coreJsData2.default.keys && _coreJsData2.default.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

exports.default = isMasked;
//# sourceMappingURL=_isMasked.js.map
