'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAt = require('./_baseAt.js');

var _baseAt2 = _interopRequireDefault(_baseAt);

var _flatRest = require('./_flatRest.js');

var _flatRest2 = _interopRequireDefault(_flatRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _.at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var at = (0, _flatRest2.default)(_baseAt2.default);

exports.default = at;
//# sourceMappingURL=at.js.map
