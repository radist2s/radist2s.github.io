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

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padEnd('abc', 6);
 * // => 'abc   '
 *
 * _.padEnd('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * _.padEnd('abc', 3);
 * // => 'abc'
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function padEnd(string, length, chars) {
  string = (0, _toString2.default)(string);
  length = (0, _toInteger2.default)(length);

  var strLength = length ? (0, _stringSize2.default)(string) : 0;
  return length && strLength < length ? string + (0, _createPadding2.default)(length - strLength, chars) : string;
}

exports.default = padEnd;
//# sourceMappingURL=padEnd.js.map
