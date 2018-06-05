'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listCacheClear = require('./_listCacheClear.js');

var _listCacheClear2 = _interopRequireDefault(_listCacheClear);

var _listCacheDelete = require('./_listCacheDelete.js');

var _listCacheDelete2 = _interopRequireDefault(_listCacheDelete);

var _listCacheGet = require('./_listCacheGet.js');

var _listCacheGet2 = _interopRequireDefault(_listCacheGet);

var _listCacheHas = require('./_listCacheHas.js');

var _listCacheHas2 = _interopRequireDefault(_listCacheHas);

var _listCacheSet = require('./_listCacheSet.js');

var _listCacheSet2 = _interopRequireDefault(_listCacheSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear2.default;
ListCache.prototype['delete'] = _listCacheDelete2.default;
ListCache.prototype.get = _listCacheGet2.default;
ListCache.prototype.has = _listCacheHas2.default;
ListCache.prototype.set = _listCacheSet2.default;

exports.default = ListCache;
//# sourceMappingURL=_ListCache.js.map
