'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = require('./_apply.js');

var _apply2 = _interopRequireDefault(_apply);

var _createCtor = require('./_createCtor.js');

var _createCtor2 = _interopRequireDefault(_createCtor);

var _createHybrid = require('./_createHybrid.js');

var _createHybrid2 = _interopRequireDefault(_createHybrid);

var _createRecurry = require('./_createRecurry.js');

var _createRecurry2 = _interopRequireDefault(_createRecurry);

var _getHolder = require('./_getHolder.js');

var _getHolder2 = _interopRequireDefault(_getHolder);

var _replaceHolders = require('./_replaceHolders.js');

var _replaceHolders2 = _interopRequireDefault(_replaceHolders);

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = (0, _createCtor2.default)(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = (0, _getHolder2.default)(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : (0, _replaceHolders2.default)(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return (0, _createRecurry2.default)(func, bitmask, _createHybrid2.default, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }
    var fn = this && this !== _root2.default && this instanceof wrapper ? Ctor : func;
    return (0, _apply2.default)(fn, this, args);
  }
  return wrapper;
}

exports.default = createCurry;
//# sourceMappingURL=_createCurry.js.map
