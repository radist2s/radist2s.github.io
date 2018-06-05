'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createCtor = require('./_createCtor.js');

var _createCtor2 = _interopRequireDefault(_createCtor);

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = (0, _createCtor2.default)(func);

  function wrapper() {
    var fn = this && this !== _root2.default && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

exports.default = createBind;
//# sourceMappingURL=_createBind.js.map
