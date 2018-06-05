'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayMap = require('./_arrayMap.js');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _baseClone = require('./_baseClone.js');

var _baseClone2 = _interopRequireDefault(_baseClone);

var _baseUnset = require('./_baseUnset.js');

var _baseUnset2 = _interopRequireDefault(_baseUnset);

var _castPath = require('./_castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _copyObject = require('./_copyObject.js');

var _copyObject2 = _interopRequireDefault(_copyObject);

var _customOmitClone = require('./_customOmitClone.js');

var _customOmitClone2 = _interopRequireDefault(_customOmitClone);

var _flatRest = require('./_flatRest.js');

var _flatRest2 = _interopRequireDefault(_flatRest);

var _getAllKeysIn = require('./_getAllKeysIn.js');

var _getAllKeysIn2 = _interopRequireDefault(_getAllKeysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = (0, _flatRest2.default)(function (object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = (0, _arrayMap2.default)(paths, function (path) {
    path = (0, _castPath2.default)(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  (0, _copyObject2.default)(object, (0, _getAllKeysIn2.default)(object), result);
  if (isDeep) {
    result = (0, _baseClone2.default)(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, _customOmitClone2.default);
  }
  var length = paths.length;
  while (length--) {
    (0, _baseUnset2.default)(result, paths[length]);
  }
  return result;
});

exports.default = omit;
//# sourceMappingURL=omit.js.map
