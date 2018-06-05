'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForOwnRight = require('./_baseForOwnRight.js');

var _baseForOwnRight2 = _interopRequireDefault(_baseForOwnRight);

var _castFunction = require('./_castFunction.js');

var _castFunction2 = _interopRequireDefault(_castFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.forOwn` except that it iterates over properties of
 * `object` in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwnRight(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function forOwnRight(object, iteratee) {
  return object && (0, _baseForOwnRight2.default)(object, (0, _castFunction2.default)(iteratee));
}

exports.default = forOwnRight;
//# sourceMappingURL=forOwnRight.js.map
