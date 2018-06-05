'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = require('./_Symbol.js');

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol3.default ? _Symbol3.default.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

exports.default = cloneSymbol;
//# sourceMappingURL=_cloneSymbol.js.map
