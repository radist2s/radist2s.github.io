'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = require('./_copyObject.js');

var _copyObject2 = _interopRequireDefault(_copyObject);

var _getSymbols = require('./_getSymbols.js');

var _getSymbols2 = _interopRequireDefault(_getSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0, _copyObject2.default)(source, (0, _getSymbols2.default)(source), object);
}

exports.default = copySymbols;
//# sourceMappingURL=_copySymbols.js.map
