'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = require('./_apply.js');

var _apply2 = _interopRequireDefault(_apply);

var _arrayPush = require('./_arrayPush.js');

var _arrayPush2 = _interopRequireDefault(_arrayPush);

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _castSlice = require('./_castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = start == null ? 0 : nativeMax((0, _toInteger2.default)(start), 0);
  return (0, _baseRest2.default)(function (args) {
    var array = args[start],
        otherArgs = (0, _castSlice2.default)(args, 0, start);

    if (array) {
      (0, _arrayPush2.default)(otherArgs, array);
    }
    return (0, _apply2.default)(func, this, otherArgs);
  });
}

exports.default = spread;
//# sourceMappingURL=spread.js.map
