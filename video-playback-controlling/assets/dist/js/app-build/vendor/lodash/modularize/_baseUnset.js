'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = require('./_castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

var _parent = require('./_parent.js');

var _parent2 = _interopRequireDefault(_parent);

var _toKey = require('./_toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = (0, _castPath2.default)(path, object);
  object = (0, _parent2.default)(object, path);
  return object == null || delete object[(0, _toKey2.default)((0, _last2.default)(path))];
}

exports.default = baseUnset;
//# sourceMappingURL=_baseUnset.js.map
