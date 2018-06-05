'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = require('./isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isMasked = require('./_isMasked.js');

var _isMasked2 = _interopRequireDefault(_isMasked);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _toSource = require('./_toSource.js');

var _toSource2 = _interopRequireDefault(_toSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0, _isObject2.default)(value) || (0, _isMasked2.default)(value)) {
    return false;
  }
  var pattern = (0, _isFunction2.default)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0, _toSource2.default)(value));
}

exports.default = baseIsNative;
//# sourceMappingURL=_baseIsNative.js.map
