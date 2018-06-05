'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asciiSize = require('./_asciiSize.js');

var _asciiSize2 = _interopRequireDefault(_asciiSize);

var _hasUnicode = require('./_hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _unicodeSize = require('./_unicodeSize.js');

var _unicodeSize2 = _interopRequireDefault(_unicodeSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return (0, _hasUnicode2.default)(string) ? (0, _unicodeSize2.default)(string) : (0, _asciiSize2.default)(string);
}

exports.default = stringSize;
//# sourceMappingURL=_stringSize.js.map
