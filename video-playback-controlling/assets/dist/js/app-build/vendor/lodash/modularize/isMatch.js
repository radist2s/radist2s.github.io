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
 * Performs a partial deep comparison between `object` and `source` to
 * determine if `object` contains equivalent property values.
 *
 * **Note:** This method is equivalent to `_.matches` when `source` is
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 *
 * _.isMatch(object, { 'b': 2 });
 * // => true
 *
 * _.isMatch(object, { 'b': 1 });
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
function isMatch(object, source) {
  return object === source || (0, _baseIsMatch2.default)(object, source, (0, _getMatchData2.default)(source));
}

exports.default = isMatch;
//# sourceMappingURL=isMatch.js.map
