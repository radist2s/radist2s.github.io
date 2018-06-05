'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToString = require('./_baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

var _castSlice = require('./_castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _charsEndIndex = require('./_charsEndIndex.js');

var _charsEndIndex2 = _interopRequireDefault(_charsEndIndex);

var _stringToArray = require('./_stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match leading and trailing whitespace. */
var reTrimEnd = /\s+$/;

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function trimEnd(string, chars, guard) {
  string = (0, _toString2.default)(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimEnd, '');
  }
  if (!string || !(chars = (0, _baseToString2.default)(chars))) {
    return string;
  }
  var strSymbols = (0, _stringToArray2.default)(string),
      end = (0, _charsEndIndex2.default)(strSymbols, (0, _stringToArray2.default)(chars)) + 1;

  return (0, _castSlice2.default)(strSymbols, 0, end).join('');
}

exports.default = trimEnd;
//# sourceMappingURL=trimEnd.js.map
