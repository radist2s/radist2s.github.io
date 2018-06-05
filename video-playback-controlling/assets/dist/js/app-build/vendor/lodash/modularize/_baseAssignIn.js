'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = require('./_copyObject.js');

var _copyObject2 = _interopRequireDefault(_copyObject);

var _keysIn = require('./keysIn.js');

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0, _copyObject2.default)(source, (0, _keysIn2.default)(source), object);
}

exports.default = baseAssignIn;
//# sourceMappingURL=_baseAssignIn.js.map
