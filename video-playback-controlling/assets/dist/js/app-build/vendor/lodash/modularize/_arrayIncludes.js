'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIndexOf = require('./_baseIndexOf.js');

var _baseIndexOf2 = _interopRequireDefault(_baseIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && (0, _baseIndexOf2.default)(array, value, 0) > -1;
}

exports.default = arrayIncludes;
//# sourceMappingURL=_arrayIncludes.js.map
