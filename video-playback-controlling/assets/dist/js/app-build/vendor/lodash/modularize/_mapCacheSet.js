'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = require('./_getMapData.js');

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0, _getMapData2.default)(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

exports.default = mapCacheSet;
//# sourceMappingURL=_mapCacheSet.js.map
