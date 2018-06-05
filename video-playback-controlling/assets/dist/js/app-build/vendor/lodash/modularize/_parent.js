'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = require('./_baseGet.js');

var _baseGet2 = _interopRequireDefault(_baseGet);

var _baseSlice = require('./_baseSlice.js');

var _baseSlice2 = _interopRequireDefault(_baseSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : (0, _baseGet2.default)(object, (0, _baseSlice2.default)(path, 0, -1));
}

exports.default = parent;
//# sourceMappingURL=_parent.js.map
