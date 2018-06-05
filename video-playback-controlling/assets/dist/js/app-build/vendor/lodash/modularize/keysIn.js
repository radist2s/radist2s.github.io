'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayLikeKeys = require('./_arrayLikeKeys.js');

var _arrayLikeKeys2 = _interopRequireDefault(_arrayLikeKeys);

var _baseKeysIn = require('./_baseKeysIn.js');

var _baseKeysIn2 = _interopRequireDefault(_baseKeysIn);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0, _isArrayLike2.default)(object) ? (0, _arrayLikeKeys2.default)(object, true) : (0, _baseKeysIn2.default)(object);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = keysIn;
//# sourceMappingURL=keysIn.js.map
