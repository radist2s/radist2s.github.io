'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFilter = require('./_arrayFilter.js');

var _arrayFilter2 = _interopRequireDefault(_arrayFilter);

var _stubArray = require('./stubArray.js');

var _stubArray2 = _interopRequireDefault(_stubArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray2.default : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0, _arrayFilter2.default)(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

exports.default = getSymbols;
//# sourceMappingURL=_getSymbols.js.map
