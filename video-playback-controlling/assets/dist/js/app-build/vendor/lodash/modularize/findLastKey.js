'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFindKey = require('./_baseFindKey.js');

var _baseFindKey2 = _interopRequireDefault(_baseFindKey);

var _baseForOwnRight = require('./_baseForOwnRight.js');

var _baseForOwnRight2 = _interopRequireDefault(_baseForOwnRight);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.findKey` except that it iterates over elements of
 * a collection in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * var users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * _.findLastKey(users, function(o) { return o.age < 40; });
 * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastKey(users, { 'age': 36, 'active': true });
 * // => 'barney'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastKey(users, ['active', false]);
 * // => 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastKey(users, 'active');
 * // => 'pebbles'
 */
function findLastKey(object, predicate) {
  return (0, _baseFindKey2.default)(object, (0, _baseIteratee2.default)(predicate, 3), _baseForOwnRight2.default);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = findLastKey;
//# sourceMappingURL=findLastKey.js.map
