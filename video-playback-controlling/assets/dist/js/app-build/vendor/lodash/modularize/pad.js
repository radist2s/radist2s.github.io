'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPadding = require('./_createPadding.js');

var _createPadding2 = _interopRequireDefault(_createPadding);

var _stringSize = require('./_stringSize.js');

var _stringSize2 = _interopRequireDefault(_stringSize);

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var nativeCeil = Math.ceil,
    nativeFloor = Math.floor;

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.pad('abc', 8);
 * // => '  abc   '
 *
 * _.pad('abc', 8, '_-');
 * // => '_-abc_-_'
 *
 * _.pad('abc', 3);
 * // => 'abc'
 */
function pad(string, length, chars) {
  string = (0, _toString2.default)(string);
  length = (0, _toInteger2.default)(length);

  var strLength = length ? (0, _stringSize2.default)(string) : 0;
  if (!length || strLength >= length) {
    return string;
  }
  var mid = (length - strLength) / 2;
  return (0, _createPadding2.default)(nativeFloor(mid), chars) + string + (0, _createPadding2.default)(nativeCeil(mid), chars);
}

exports.default = pad;
//# sourceMappingURL=pad.js.map
