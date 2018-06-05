'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = require('./_apply.js');

var _apply2 = _interopRequireDefault(_apply);

var _arrayMap = require('./_arrayMap.js');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _baseFlatten = require('./_baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _baseUnary = require('./_baseUnary.js');

var _baseUnary2 = _interopRequireDefault(_baseUnary);

var _castRest = require('./_castRest.js');

var _castRest2 = _interopRequireDefault(_castRest);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var nativeMin = Math.min;

/**
 * Creates a function that invokes `func` with its arguments transformed.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {...(Function|Function[])} [transforms=[_.identity]]
 *  The argument transforms.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2;
 * }
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var func = _.overArgs(function(x, y) {
 *   return [x, y];
 * }, [square, doubled]);
 *
 * func(9, 3);
 * // => [81, 6]
 *
 * func(10, 5);
 * // => [100, 10]
 */
var overArgs = (0, _castRest2.default)(function (func, transforms) {
  transforms = transforms.length == 1 && (0, _isArray2.default)(transforms[0]) ? (0, _arrayMap2.default)(transforms[0], (0, _baseUnary2.default)(_baseIteratee2.default)) : (0, _arrayMap2.default)((0, _baseFlatten2.default)(transforms, 1), (0, _baseUnary2.default)(_baseIteratee2.default));

  var funcsLength = transforms.length;
  return (0, _baseRest2.default)(function (args) {
    var index = -1,
        length = nativeMin(args.length, funcsLength);

    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return (0, _apply2.default)(func, this, args);
  });
});

exports.default = overArgs;
//# sourceMappingURL=overArgs.js.map
