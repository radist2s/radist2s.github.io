'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsTypedArray = require('./_baseIsTypedArray.js');

var _baseIsTypedArray2 = _interopRequireDefault(_baseIsTypedArray);

var _baseUnary = require('./_baseUnary.js');

var _baseUnary2 = _interopRequireDefault(_baseUnary);

var _nodeUtil = require('./_nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil2.default && _nodeUtil2.default.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
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
var isTypedArray = nodeIsTypedArray ? (0, _baseUnary2.default)(nodeIsTypedArray) : _baseIsTypedArray2.default;

exports.default = isTypedArray;
//# sourceMappingURL=isTypedArray.js.map
