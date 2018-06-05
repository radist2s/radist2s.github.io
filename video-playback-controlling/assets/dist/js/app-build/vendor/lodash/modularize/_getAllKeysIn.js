'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetAllKeys = require('./_baseGetAllKeys.js');

var _baseGetAllKeys2 = _interopRequireDefault(_baseGetAllKeys);

var _getSymbolsIn = require('./_getSymbolsIn.js');

var _getSymbolsIn2 = _interopRequireDefault(_getSymbolsIn);

var _keysIn = require('./keysIn.js');

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0, _baseGetAllKeys2.default)(object, _keysIn2.default, _getSymbolsIn2.default);
}

exports.default = getAllKeysIn;
//# sourceMappingURL=_getAllKeysIn.js.map
