'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metaMap = require('./_metaMap.js');

var _metaMap2 = _interopRequireDefault(_metaMap);

var _noop = require('./noop.js');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !_metaMap2.default ? _noop2.default : function (func) {
  return _metaMap2.default.get(func);
};

exports.default = getData;
//# sourceMappingURL=_getData.js.map
