'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToPairs = require('./_baseToPairs.js');

var _baseToPairs2 = _interopRequireDefault(_baseToPairs);

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _mapToArray = require('./_mapToArray.js');

var _mapToArray2 = _interopRequireDefault(_mapToArray);

var _setToPairs = require('./_setToPairs.js');

var _setToPairs2 = _interopRequireDefault(_setToPairs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function (object) {
    var tag = (0, _getTag2.default)(object);
    if (tag == mapTag) {
      return (0, _mapToArray2.default)(object);
    }
    if (tag == setTag) {
      return (0, _setToPairs2.default)(object);
    }
    return (0, _baseToPairs2.default)(object, keysFunc(object));
  };
}

exports.default = createToPairs;
//# sourceMappingURL=_createToPairs.js.map
