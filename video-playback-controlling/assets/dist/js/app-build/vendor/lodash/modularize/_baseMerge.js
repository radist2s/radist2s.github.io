'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stack = require('./_Stack.js');

var _Stack2 = _interopRequireDefault(_Stack);

var _assignMergeValue = require('./_assignMergeValue.js');

var _assignMergeValue2 = _interopRequireDefault(_assignMergeValue);

var _baseFor = require('./_baseFor.js');

var _baseFor2 = _interopRequireDefault(_baseFor);

var _baseMergeDeep = require('./_baseMergeDeep.js');

var _baseMergeDeep2 = _interopRequireDefault(_baseMergeDeep);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _keysIn = require('./keysIn.js');

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  (0, _baseFor2.default)(source, function (srcValue, key) {
    if ((0, _isObject2.default)(srcValue)) {
      stack || (stack = new _Stack2.default());
      (0, _baseMergeDeep2.default)(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      (0, _assignMergeValue2.default)(object, key, newValue);
    }
  }, _keysIn2.default);
}

exports.default = baseMerge;
//# sourceMappingURL=_baseMerge.js.map
