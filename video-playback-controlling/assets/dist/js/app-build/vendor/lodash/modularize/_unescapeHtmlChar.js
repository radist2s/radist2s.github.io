'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePropertyOf = require('./_basePropertyOf.js');

var _basePropertyOf2 = _interopRequireDefault(_basePropertyOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = (0, _basePropertyOf2.default)(htmlUnescapes);

exports.default = unescapeHtmlChar;
//# sourceMappingURL=_unescapeHtmlChar.js.map
