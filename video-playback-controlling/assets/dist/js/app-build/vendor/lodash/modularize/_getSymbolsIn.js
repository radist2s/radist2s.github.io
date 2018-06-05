'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPush = require('./_arrayPush.js');

var _arrayPush2 = _interopRequireDefault(_arrayPush);

var _getPrototype = require('./_getPrototype.js');

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _getSymbols = require('./_getSymbols.js');

var _getSymbols2 = _interopRequireDefault(_getSymbols);

var _stubArray = require('./stubArray.js');

var _stubArray2 = _interopRequireDefault(_stubArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray2.default : function (object) {
  var result = [];
  while (object) {
    (0, _arrayPush2.default)(result, (0, _getSymbols2.default)(object));
    object = (0, _getPrototype2.default)(object);
  }
  return result;
};

exports.default = getSymbolsIn;
//# sourceMappingURL=_getSymbolsIn.js.map
