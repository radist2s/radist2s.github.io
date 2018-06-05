'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSetData = require('./_baseSetData.js');

var _baseSetData2 = _interopRequireDefault(_baseSetData);

var _createBind = require('./_createBind.js');

var _createBind2 = _interopRequireDefault(_createBind);

var _createCurry = require('./_createCurry.js');

var _createCurry2 = _interopRequireDefault(_createCurry);

var _createHybrid = require('./_createHybrid.js');

var _createHybrid2 = _interopRequireDefault(_createHybrid);

var _createPartial = require('./_createPartial.js');

var _createPartial2 = _interopRequireDefault(_createPartial);

var _getData = require('./_getData.js');

var _getData2 = _interopRequireDefault(_getData);

var _mergeData = require('./_mergeData.js');

var _mergeData2 = _interopRequireDefault(_mergeData);

var _setData = require('./_setData.js');

var _setData2 = _interopRequireDefault(_setData);

var _setWrapToString = require('./_setWrapToString.js');

var _setWrapToString2 = _interopRequireDefault(_setWrapToString);

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax((0, _toInteger2.default)(ary), 0);
  arity = arity === undefined ? arity : (0, _toInteger2.default)(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : (0, _getData2.default)(func);

  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  if (data) {
    (0, _mergeData2.default)(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = (0, _createBind2.default)(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = (0, _createCurry2.default)(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = (0, _createPartial2.default)(func, bitmask, thisArg, partials);
  } else {
    result = _createHybrid2.default.apply(undefined, newData);
  }
  var setter = data ? _baseSetData2.default : _setData2.default;
  return (0, _setWrapToString2.default)(setter(result, newData), func, bitmask);
}

exports.default = createWrap;
//# sourceMappingURL=_createWrap.js.map
