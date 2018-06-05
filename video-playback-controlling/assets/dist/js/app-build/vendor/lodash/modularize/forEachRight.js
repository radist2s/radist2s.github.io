'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEachRight = require('./_arrayEachRight.js');

var _arrayEachRight2 = _interopRequireDefault(_arrayEachRight);

var _baseEachRight = require('./_baseEachRight.js');

var _baseEachRight2 = _interopRequireDefault(_baseEachRight);

var _castFunction = require('./_castFunction.js');

var _castFunction2 = _interopRequireDefault(_castFunction);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.forEach` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEach
 * @example
 *
 * _.forEachRight([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `2` then `1`.
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function forEachRight(collection, iteratee) {
  var func = (0, _isArray2.default)(collection) ? _arrayEachRight2.default : _baseEachRight2.default;
  return func(collection, (0, _castFunction2.default)(iteratee));
}

exports.default = forEachRight;
//# sourceMappingURL=forEachRight.js.map
