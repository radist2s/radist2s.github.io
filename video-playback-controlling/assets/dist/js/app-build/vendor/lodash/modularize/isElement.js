'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isPlainObject = require('./isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
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
function isElement(value) {
  return (0, _isObjectLike2.default)(value) && value.nodeType === 1 && !(0, _isPlainObject2.default)(value);
}

exports.default = isElement;
//# sourceMappingURL=isElement.js.map
