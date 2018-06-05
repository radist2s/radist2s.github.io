'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSlice = require('./_baseSlice.js');

var _baseSlice2 = _interopRequireDefault(_baseSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : (0, _baseSlice2.default)(array, start, end);
}

exports.default = castSlice;
//# sourceMappingURL=_castSlice.js.map
