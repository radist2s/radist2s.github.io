'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForRight = require('./_baseForRight.js');

var _baseForRight2 = _interopRequireDefault(_baseForRight);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwnRight(object, iteratee) {
  return object && (0, _baseForRight2.default)(object, iteratee, _keys2.default);
}

exports.default = baseForOwnRight;
//# sourceMappingURL=_baseForOwnRight.js.map
