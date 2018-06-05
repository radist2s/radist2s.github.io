'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapCacheClear = require('./_mapCacheClear.js');

var _mapCacheClear2 = _interopRequireDefault(_mapCacheClear);

var _mapCacheDelete = require('./_mapCacheDelete.js');

var _mapCacheDelete2 = _interopRequireDefault(_mapCacheDelete);

var _mapCacheGet = require('./_mapCacheGet.js');

var _mapCacheGet2 = _interopRequireDefault(_mapCacheGet);

var _mapCacheHas = require('./_mapCacheHas.js');

var _mapCacheHas2 = _interopRequireDefault(_mapCacheHas);

var _mapCacheSet = require('./_mapCacheSet.js');

var _mapCacheSet2 = _interopRequireDefault(_mapCacheSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear2.default;
MapCache.prototype['delete'] = _mapCacheDelete2.default;
MapCache.prototype.get = _mapCacheGet2.default;
MapCache.prototype.has = _mapCacheHas2.default;
MapCache.prototype.set = _mapCacheSet2.default;

exports.default = MapCache;
//# sourceMappingURL=_MapCache.js.map
