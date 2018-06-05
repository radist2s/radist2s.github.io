'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseKeys = require('./_baseKeys.js');

var _baseKeys2 = _interopRequireDefault(_baseKeys);

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isString = require('./isString.js');

var _isString2 = _interopRequireDefault(_isString);

var _stringSize = require('./_stringSize.js');

var _stringSize2 = _interopRequireDefault(_stringSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if ((0, _isArrayLike2.default)(collection)) {
    return (0, _isString2.default)(collection) ? (0, _stringSize2.default)(collection) : collection.length;
  }
  var tag = (0, _getTag2.default)(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return (0, _baseKeys2.default)(collection).length;
}

exports.default = size;
//# sourceMappingURL=size.js.map
