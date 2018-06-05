'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFind = require('./_createFind.js');

var _createFind2 = _interopRequireDefault(_createFind);

var _findLastIndex = require('./findLastIndex.js');

var _findLastIndex2 = _interopRequireDefault(_findLastIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var findLast = (0, _createFind2.default)(_findLastIndex2.default);

exports.default = findLast;
//# sourceMappingURL=findLast.js.map
