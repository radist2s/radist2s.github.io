'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAssignValue = require('./_baseAssignValue.js');

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

var _createAggregator = require('./_createAggregator.js');

var _createAggregator2 = _interopRequireDefault(_createAggregator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = (0, _createAggregator2.default)(function (result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    (0, _baseAssignValue2.default)(result, key, [value]);
  }
});

exports.default = groupBy;
//# sourceMappingURL=groupBy.js.map
