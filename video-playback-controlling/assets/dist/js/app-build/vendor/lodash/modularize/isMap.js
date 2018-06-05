'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsMap = require('./_baseIsMap.js');

var _baseIsMap2 = _interopRequireDefault(_baseIsMap);

var _baseUnary = require('./_baseUnary.js');

var _baseUnary2 = _interopRequireDefault(_baseUnary);

var _nodeUtil = require('./_nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsMap = _nodeUtil2.default && _nodeUtil2.default.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
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
var isMap = nodeIsMap ? (0, _baseUnary2.default)(nodeIsMap) : _baseIsMap2.default;

exports.default = isMap;
//# sourceMappingURL=isMap.js.map
