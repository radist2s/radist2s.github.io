'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = require('./identity.js');

var _identity2 = _interopRequireDefault(_identity);

var _metaMap = require('./_metaMap.js');

var _metaMap2 = _interopRequireDefault(_metaMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !_metaMap2.default ? _identity2.default : function (func, data) {
  _metaMap2.default.set(func, data);
  return func;
};

exports.default = baseSetData;
//# sourceMappingURL=_baseSetData.js.map
