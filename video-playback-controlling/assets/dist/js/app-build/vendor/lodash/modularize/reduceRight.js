'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayReduceRight = require('./_arrayReduceRight.js');

var _arrayReduceRight2 = _interopRequireDefault(_arrayReduceRight);

var _baseEachRight = require('./_baseEachRight.js');

var _baseEachRight2 = _interopRequireDefault(_baseEachRight);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _baseReduce = require('./_baseReduce.js');

var _baseReduce2 = _interopRequireDefault(_baseReduce);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduce
 * @example
 *
 * var array = [[0, 1], [2, 3], [4, 5]];
 *
 * _.reduceRight(array, function(flattened, other) {
 *   return flattened.concat(other);
 * }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  var func = (0, _isArray2.default)(collection) ? _arrayReduceRight2.default : _baseReduce2.default,
      initAccum = arguments.length < 3;

  return func(collection, (0, _baseIteratee2.default)(iteratee, 4), accumulator, initAccum, _baseEachRight2.default);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = reduceRight;
//# sourceMappingURL=reduceRight.js.map
