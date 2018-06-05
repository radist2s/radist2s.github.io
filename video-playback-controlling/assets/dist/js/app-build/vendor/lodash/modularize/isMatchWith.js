'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsMatch = require('./_baseIsMatch.js');

var _baseIsMatch2 = _interopRequireDefault(_baseIsMatch);

var _getMatchData = require('./_getMatchData.js');

var _getMatchData2 = _interopRequireDefault(_getMatchData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.isMatch` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with five
 * arguments: (objValue, srcValue, index|key, object, source).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, srcValue) {
 *   if (isGreeting(objValue) && isGreeting(srcValue)) {
 *     return true;
 *   }
 * }
 *
 * var object = { 'greeting': 'hello' };
 * var source = { 'greeting': 'hi' };
 *
 * _.isMatchWith(object, source, customizer);
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
function isMatchWith(object, source, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return (0, _baseIsMatch2.default)(object, source, (0, _getMatchData2.default)(source), customizer);
}

exports.default = isMatchWith;
//# sourceMappingURL=isMatchWith.js.map
