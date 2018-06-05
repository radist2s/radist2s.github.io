'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = require('./_apply.js');

var _apply2 = _interopRequireDefault(_apply);

var _baseEach = require('./_baseEach.js');

var _baseEach2 = _interopRequireDefault(_baseEach);

var _baseInvoke = require('./_baseInvoke.js');

var _baseInvoke2 = _interopRequireDefault(_baseInvoke);

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {...*} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * _.invokeMap([123, 456], String.prototype.split, '');
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
var invokeMap = (0, _baseRest2.default)(function (collection, path, args) {
  var index = -1,
      isFunc = typeof path == 'function',
      result = (0, _isArrayLike2.default)(collection) ? Array(collection.length) : [];

  (0, _baseEach2.default)(collection, function (value) {
    result[++index] = isFunc ? (0, _apply2.default)(path, value, args) : (0, _baseInvoke2.default)(value, path, args);
  });
  return result;
}); /**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
exports.default = invokeMap;
//# sourceMappingURL=invokeMap.js.map
