'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRepeat = require('./_baseRepeat.js');

var _baseRepeat2 = _interopRequireDefault(_baseRepeat);

var _baseToString = require('./_baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

var _castSlice = require('./_castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _hasUnicode = require('./_hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _stringSize = require('./_stringSize.js');

var _stringSize2 = _interopRequireDefault(_stringSize);

var _stringToArray = require('./_stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : (0, _baseToString2.default)(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? (0, _baseRepeat2.default)(chars, length) : chars;
  }
  var result = (0, _baseRepeat2.default)(chars, nativeCeil(length / (0, _stringSize2.default)(chars)));
  return (0, _hasUnicode2.default)(chars) ? (0, _castSlice2.default)((0, _stringToArray2.default)(result), 0, length).join('') : result.slice(0, length);
}

exports.default = createPadding;
//# sourceMappingURL=_createPadding.js.map
