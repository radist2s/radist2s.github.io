'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePick = require('./_basePick.js');

var _basePick2 = _interopRequireDefault(_basePick);

var _flatRest = require('./_flatRest.js');

var _flatRest2 = _interopRequireDefault(_flatRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
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
var pick = (0, _flatRest2.default)(function (object, paths) {
  return object == null ? {} : (0, _basePick2.default)(object, paths);
});

exports.default = pick;
//# sourceMappingURL=pick.js.map
