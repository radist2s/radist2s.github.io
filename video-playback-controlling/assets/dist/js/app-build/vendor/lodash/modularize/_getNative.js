'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsNative = require('./_baseIsNative.js');

var _baseIsNative2 = _interopRequireDefault(_baseIsNative);

var _getValue = require('./_getValue.js');

var _getValue2 = _interopRequireDefault(_getValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0, _getValue2.default)(object, key);
  return (0, _baseIsNative2.default)(value) ? value : undefined;
}

exports.default = getNative;
//# sourceMappingURL=_getNative.js.map
