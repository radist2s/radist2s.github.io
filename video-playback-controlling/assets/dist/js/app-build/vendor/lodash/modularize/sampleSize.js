'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arraySampleSize = require('./_arraySampleSize.js');

var _arraySampleSize2 = _interopRequireDefault(_arraySampleSize);

var _baseSampleSize = require('./_baseSampleSize.js');

var _baseSampleSize2 = _interopRequireDefault(_baseSampleSize);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isIterateeCall = require('./_isIterateeCall.js');

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  if (guard ? (0, _isIterateeCall2.default)(collection, n, guard) : n === undefined) {
    n = 1;
  } else {
    n = (0, _toInteger2.default)(n);
  }
  var func = (0, _isArray2.default)(collection) ? _arraySampleSize2.default : _baseSampleSize2.default;
  return func(collection, n);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = sampleSize;
//# sourceMappingURL=sampleSize.js.map
