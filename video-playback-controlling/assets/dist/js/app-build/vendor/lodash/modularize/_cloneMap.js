'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addMapEntry = require('./_addMapEntry.js');

var _addMapEntry2 = _interopRequireDefault(_addMapEntry);

var _arrayReduce = require('./_arrayReduce.js');

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _mapToArray = require('./_mapToArray.js');

var _mapToArray2 = _interopRequireDefault(_mapToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc((0, _mapToArray2.default)(map), CLONE_DEEP_FLAG) : (0, _mapToArray2.default)(map);
  return (0, _arrayReduce2.default)(array, _addMapEntry2.default, new map.constructor());
}

exports.default = cloneMap;
//# sourceMappingURL=_cloneMap.js.map
