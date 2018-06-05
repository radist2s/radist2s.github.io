'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castFunction = require('./_castFunction.js');

var _castFunction2 = _interopRequireDefault(_castFunction);

var _partial = require('./partial.js');

var _partial2 = _interopRequireDefault(_partial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function that provides `value` to `wrapper` as its first
 * argument. Any additional arguments provided to the function are appended
 * to those provided to the `wrapper`. The wrapper is invoked with the `this`
 * binding of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {*} value The value to wrap.
 * @param {Function} [wrapper=identity] The wrapper function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var p = _.wrap(_.escape, function(func, text) {
 *   return '<p>' + func(text) + '</p>';
 * });
 *
 * p('fred, barney, & pebbles');
 * // => '<p>fred, barney, &amp; pebbles</p>'
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function wrap(value, wrapper) {
  return (0, _partial2.default)((0, _castFunction2.default)(wrapper), value);
}

exports.default = wrap;
//# sourceMappingURL=wrap.js.map
