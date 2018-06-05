'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseClamp = require('./_baseClamp.js');

var _baseClamp2 = _interopRequireDefault(_baseClamp);

var _baseToString = require('./_baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function startsWith(string, target, position) {
  string = (0, _toString2.default)(string);
  position = position == null ? 0 : (0, _baseClamp2.default)((0, _toInteger2.default)(position), 0, string.length);

  target = (0, _baseToString2.default)(target);
  return string.slice(position, position + target.length) == target;
}

exports.default = startsWith;
//# sourceMappingURL=startsWith.js.map
