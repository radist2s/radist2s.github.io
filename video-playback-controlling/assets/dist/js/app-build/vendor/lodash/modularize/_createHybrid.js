'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composeArgs = require('./_composeArgs.js');

var _composeArgs2 = _interopRequireDefault(_composeArgs);

var _composeArgsRight = require('./_composeArgsRight.js');

var _composeArgsRight2 = _interopRequireDefault(_composeArgsRight);

var _countHolders = require('./_countHolders.js');

var _countHolders2 = _interopRequireDefault(_countHolders);

var _createCtor = require('./_createCtor.js');

var _createCtor2 = _interopRequireDefault(_createCtor);

var _createRecurry = require('./_createRecurry.js');

var _createRecurry2 = _interopRequireDefault(_createRecurry);

var _getHolder = require('./_getHolder.js');

var _getHolder2 = _interopRequireDefault(_getHolder);

var _reorder = require('./_reorder.js');

var _reorder2 = _interopRequireDefault(_reorder);

var _replaceHolders = require('./_replaceHolders.js');

var _replaceHolders2 = _interopRequireDefault(_replaceHolders);

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : (0, _createCtor2.default)(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = (0, _getHolder2.default)(wrapper),
          holdersCount = (0, _countHolders2.default)(args, placeholder);
    }
    if (partials) {
      args = (0, _composeArgs2.default)(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = (0, _composeArgsRight2.default)(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = (0, _replaceHolders2.default)(args, placeholder);
      return (0, _createRecurry2.default)(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = (0, _reorder2.default)(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== _root2.default && this instanceof wrapper) {
      fn = Ctor || (0, _createCtor2.default)(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

exports.default = createHybrid;
//# sourceMappingURL=_createHybrid.js.map
