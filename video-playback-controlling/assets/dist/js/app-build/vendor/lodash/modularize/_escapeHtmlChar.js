'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePropertyOf = require('./_basePropertyOf.js');

var _basePropertyOf2 = _interopRequireDefault(_basePropertyOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = (0, _basePropertyOf2.default)(htmlEscapes);

exports.default = escapeHtmlChar;
//# sourceMappingURL=_escapeHtmlChar.js.map
