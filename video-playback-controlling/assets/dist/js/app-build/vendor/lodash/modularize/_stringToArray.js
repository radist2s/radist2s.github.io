'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asciiToArray = require('./_asciiToArray.js');

var _asciiToArray2 = _interopRequireDefault(_asciiToArray);

var _hasUnicode = require('./_hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _unicodeToArray = require('./_unicodeToArray.js');

var _unicodeToArray2 = _interopRequireDefault(_unicodeToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return (0, _hasUnicode2.default)(string) ? (0, _unicodeToArray2.default)(string) : (0, _asciiToArray2.default)(string);
}

exports.default = stringToArray;
//# sourceMappingURL=_stringToArray.js.map
