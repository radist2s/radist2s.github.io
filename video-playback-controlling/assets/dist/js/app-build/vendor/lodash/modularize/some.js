'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arraySome = require('./_arraySome.js');

var _arraySome2 = _interopRequireDefault(_arraySome);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _baseSome = require('./_baseSome.js');

var _baseSome2 = _interopRequireDefault(_baseSome);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isIterateeCall = require('./_isIterateeCall.js');

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = (0, _isArray2.default)(collection) ? _arraySome2.default : _baseSome2.default;
  if (guard && (0, _isIterateeCall2.default)(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, (0, _baseIteratee2.default)(predicate, 3));
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = some;
//# sourceMappingURL=some.js.map
