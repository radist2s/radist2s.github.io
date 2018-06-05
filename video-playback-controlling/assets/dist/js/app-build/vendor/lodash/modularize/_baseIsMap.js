'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getTag = require('./_getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0, _isObjectLike2.default)(value) && (0, _getTag2.default)(value) == mapTag;
}

exports.default = baseIsMap;
//# sourceMappingURL=_baseIsMap.js.map
