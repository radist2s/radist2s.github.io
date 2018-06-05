'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = require('./_copyObject.js');

var _copyObject2 = _interopRequireDefault(_copyObject);

var _getSymbolsIn = require('./_getSymbolsIn.js');

var _getSymbolsIn2 = _interopRequireDefault(_getSymbolsIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0, _copyObject2.default)(source, (0, _getSymbolsIn2.default)(source), object);
}

exports.default = copySymbolsIn;
//# sourceMappingURL=_copySymbolsIn.js.map
