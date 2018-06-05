'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayMap = require('./_arrayMap.js');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _basePickBy = require('./_basePickBy.js');

var _basePickBy2 = _interopRequireDefault(_basePickBy);

var _getAllKeysIn = require('./_getAllKeysIn.js');

var _getAllKeysIn2 = _interopRequireDefault(_getAllKeysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = (0, _arrayMap2.default)((0, _getAllKeysIn2.default)(object), function (prop) {
    return [prop];
  });
  predicate = (0, _baseIteratee2.default)(predicate);
  return (0, _basePickBy2.default)(object, props, function (value, path) {
    return predicate(value, path[0]);
  });
}

exports.default = pickBy;
//# sourceMappingURL=pickBy.js.map
