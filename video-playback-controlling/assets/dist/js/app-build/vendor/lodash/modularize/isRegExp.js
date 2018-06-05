'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsRegExp = require('./_baseIsRegExp.js');

var _baseIsRegExp2 = _interopRequireDefault(_baseIsRegExp);

var _baseUnary = require('./_baseUnary.js');

var _baseUnary2 = _interopRequireDefault(_baseUnary);

var _nodeUtil = require('./_nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsRegExp = _nodeUtil2.default && _nodeUtil2.default.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
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
var isRegExp = nodeIsRegExp ? (0, _baseUnary2.default)(nodeIsRegExp) : _baseIsRegExp2.default;

exports.default = isRegExp;
//# sourceMappingURL=isRegExp.js.map
