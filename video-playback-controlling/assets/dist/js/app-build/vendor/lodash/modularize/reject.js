'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFilter = require('./_arrayFilter.js');

var _arrayFilter2 = _interopRequireDefault(_arrayFilter);

var _baseFilter = require('./_baseFilter.js');

var _baseFilter2 = _interopRequireDefault(_baseFilter);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _negate = require('./negate.js');

var _negate2 = _interopRequireDefault(_negate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */
function reject(collection, predicate) {
  var func = (0, _isArray2.default)(collection) ? _arrayFilter2.default : _baseFilter2.default;
  return func(collection, (0, _negate2.default)((0, _baseIteratee2.default)(predicate, 3)));
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = reject;
//# sourceMappingURL=reject.js.map
