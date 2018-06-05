'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = require('./_Symbol.js');

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _copyArray = require('./_copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isString = require('./isString.js');

var _isString2 = _interopRequireDefault(_isString);

var _iteratorToArray = require('./_iteratorToArray.js');

var _iteratorToArray2 = _interopRequireDefault(_iteratorToArray);

var _mapToArray = require('./_mapToArray.js');

var _mapToArray2 = _interopRequireDefault(_mapToArray);

var _setToArray = require('./_setToArray.js');

var _setToArray2 = _interopRequireDefault(_setToArray);

var _stringToArray = require('./_stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

var _values = require('./values.js');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = _Symbol3.default ? _Symbol3.default.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if ((0, _isArrayLike2.default)(value)) {
    return (0, _isString2.default)(value) ? (0, _stringToArray2.default)(value) : (0, _copyArray2.default)(value);
  }
  if (symIterator && value[symIterator]) {
    return (0, _iteratorToArray2.default)(value[symIterator]());
  }
  var tag = (0, _getTag2.default)(value),
      func = tag == mapTag ? _mapToArray2.default : tag == setTag ? _setToArray2.default : _values2.default;

  return func(value);
}

exports.default = toArray;
//# sourceMappingURL=toArray.js.map
