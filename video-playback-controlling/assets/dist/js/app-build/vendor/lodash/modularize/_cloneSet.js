'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addSetEntry = require('./_addSetEntry.js');

var _addSetEntry2 = _interopRequireDefault(_addSetEntry);

var _arrayReduce = require('./_arrayReduce.js');

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _setToArray = require('./_setToArray.js');

var _setToArray2 = _interopRequireDefault(_setToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc((0, _setToArray2.default)(set), CLONE_DEEP_FLAG) : (0, _setToArray2.default)(set);
  return (0, _arrayReduce2.default)(array, _addSetEntry2.default, new set.constructor());
}

exports.default = cloneSet;
//# sourceMappingURL=_cloneSet.js.map
