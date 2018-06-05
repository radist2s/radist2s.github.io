'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createWrap = require('./_createWrap.js');

var _createWrap2 = _interopRequireDefault(_createWrap);

var _flatRest = require('./_flatRest.js');

var _flatRest2 = _interopRequireDefault(_flatRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for function metadata. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = (0, _flatRest2.default)(function (func, indexes) {
  return (0, _createWrap2.default)(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

exports.default = rearg;
//# sourceMappingURL=rearg.js.map
