'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eq = require('./eq.js');

var _eq2 = _interopRequireDefault(_eq);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isIndex = require('./_isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0, _isObject2.default)(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
  if (type == 'number' ? (0, _isArrayLike2.default)(object) && (0, _isIndex2.default)(index, object.length) : type == 'string' && index in object) {
    return (0, _eq2.default)(object[index], value);
  }
  return false;
}

exports.default = isIterateeCall;
//# sourceMappingURL=_isIterateeCall.js.map
