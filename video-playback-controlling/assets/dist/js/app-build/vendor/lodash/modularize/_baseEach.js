'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForOwn = require('./_baseForOwn.js');

var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

var _createBaseEach = require('./_createBaseEach.js');

var _createBaseEach2 = _interopRequireDefault(_createBaseEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = (0, _createBaseEach2.default)(_baseForOwn2.default);

exports.default = baseEach;
//# sourceMappingURL=_baseEach.js.map
