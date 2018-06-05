'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEach = require('./_arrayEach.js');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _baseCreate = require('./_baseCreate.js');

var _baseCreate2 = _interopRequireDefault(_baseCreate);

var _baseForOwn = require('./_baseForOwn.js');

var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _getPrototype = require('./_getPrototype.js');

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isFunction = require('./isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _isTypedArray = require('./isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function transform(object, iteratee, accumulator) {
  var isArr = (0, _isArray2.default)(object),
      isArrLike = isArr || (0, _isBuffer2.default)(object) || (0, _isTypedArray2.default)(object);

  iteratee = (0, _baseIteratee2.default)(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if ((0, _isObject2.default)(object)) {
      accumulator = (0, _isFunction2.default)(Ctor) ? (0, _baseCreate2.default)((0, _getPrototype2.default)(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? _arrayEach2.default : _baseForOwn2.default)(object, function (value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

exports.default = transform;
//# sourceMappingURL=transform.js.map
