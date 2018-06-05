'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGt = require('./_baseGt.js');

var _baseGt2 = _interopRequireDefault(_baseGt);

var _createRelationalOperation = require('./_createRelationalOperation.js');

var _createRelationalOperation2 = _interopRequireDefault(_createRelationalOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is greater than `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 * @see _.lt
 * @example
 *
 * _.gt(3, 1);
 * // => true
 *
 * _.gt(3, 3);
 * // => false
 *
 * _.gt(1, 3);
 * // => false
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var gt = (0, _createRelationalOperation2.default)(_baseGt2.default);

exports.default = gt;
//# sourceMappingURL=gt.js.map
