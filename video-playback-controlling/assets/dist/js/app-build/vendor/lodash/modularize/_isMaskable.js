'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreJsData = require('./_coreJsData.js');

var _coreJsData2 = _interopRequireDefault(_coreJsData);

var _isFunction = require('./isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _stubFalse = require('./stubFalse.js');

var _stubFalse2 = _interopRequireDefault(_stubFalse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `func` is capable of being masked.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
 */
var isMaskable = _coreJsData2.default ? _isFunction2.default : _stubFalse2.default;

exports.default = isMaskable;
//# sourceMappingURL=_isMaskable.js.map
