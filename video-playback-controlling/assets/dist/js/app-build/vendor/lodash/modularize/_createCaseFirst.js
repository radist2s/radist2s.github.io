'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castSlice = require('./_castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _hasUnicode = require('./_hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _stringToArray = require('./_stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function (string) {
    string = (0, _toString2.default)(string);

    var strSymbols = (0, _hasUnicode2.default)(string) ? (0, _stringToArray2.default)(string) : undefined;

    var chr = strSymbols ? strSymbols[0] : string.charAt(0);

    var trailing = strSymbols ? (0, _castSlice2.default)(strSymbols, 1).join('') : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

exports.default = createCaseFirst;
//# sourceMappingURL=_createCaseFirst.js.map
