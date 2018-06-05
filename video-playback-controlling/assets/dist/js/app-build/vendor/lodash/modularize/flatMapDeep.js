'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFlatten = require('./_baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var INFINITY = 1 / 0;

/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDeep([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection, iteratee) {
  return (0, _baseFlatten2.default)((0, _map2.default)(collection, iteratee), INFINITY);
}

exports.default = flatMapDeep;
//# sourceMappingURL=flatMapDeep.js.map
