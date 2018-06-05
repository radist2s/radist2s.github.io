'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFlatten = require('./_baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

var _baseOrderBy = require('./_baseOrderBy.js');

var _baseOrderBy2 = _interopRequireDefault(_baseOrderBy);

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _isIterateeCall = require('./_isIterateeCall.js');

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var sortBy = (0, _baseRest2.default)(function (collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && (0, _isIterateeCall2.default)(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && (0, _isIterateeCall2.default)(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return (0, _baseOrderBy2.default)(collection, (0, _baseFlatten2.default)(iteratees, 1), []);
});

exports.default = sortBy;
//# sourceMappingURL=sortBy.js.map
