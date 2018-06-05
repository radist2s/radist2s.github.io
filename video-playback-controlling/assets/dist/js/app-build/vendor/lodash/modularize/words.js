'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asciiWords = require('./_asciiWords.js');

var _asciiWords2 = _interopRequireDefault(_asciiWords);

var _hasUnicodeWord = require('./_hasUnicodeWord.js');

var _hasUnicodeWord2 = _interopRequireDefault(_hasUnicodeWord);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

var _unicodeWords = require('./_unicodeWords.js');

var _unicodeWords2 = _interopRequireDefault(_unicodeWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function words(string, pattern, guard) {
  string = (0, _toString2.default)(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return (0, _hasUnicodeWord2.default)(string) ? (0, _unicodeWords2.default)(string) : (0, _asciiWords2.default)(string);
  }
  return string.match(pattern) || [];
}

exports.default = words;
//# sourceMappingURL=words.js.map
