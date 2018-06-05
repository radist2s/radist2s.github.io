'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEvery = require('./_arrayEvery.js');

var _arrayEvery2 = _interopRequireDefault(_arrayEvery);

var _baseEvery = require('./_baseEvery.js');

var _baseEvery2 = _interopRequireDefault(_baseEvery);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isIterateeCall = require('./_isIterateeCall.js');

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = (0, _isArray2.default)(collection) ? _arrayEvery2.default : _baseEvery2.default;
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
exports.default = every;
//# sourceMappingURL=every.js.map
