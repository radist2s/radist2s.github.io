'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsSet = require('./_baseIsSet.js');

var _baseIsSet2 = _interopRequireDefault(_baseIsSet);

var _baseUnary = require('./_baseUnary.js');

var _baseUnary2 = _interopRequireDefault(_baseUnary);

var _nodeUtil = require('./_nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsSet = _nodeUtil2.default && _nodeUtil2.default.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
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
var isSet = nodeIsSet ? (0, _baseUnary2.default)(nodeIsSet) : _baseIsSet2.default;

exports.default = isSet;
//# sourceMappingURL=isSet.js.map
