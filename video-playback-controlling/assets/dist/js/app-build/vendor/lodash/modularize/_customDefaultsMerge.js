'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseMerge = require('./_baseMerge.js');

var _baseMerge2 = _interopRequireDefault(_baseMerge);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if ((0, _isObject2.default)(objValue) && (0, _isObject2.default)(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    (0, _baseMerge2.default)(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

exports.default = customDefaultsMerge;
//# sourceMappingURL=_customDefaultsMerge.js.map
