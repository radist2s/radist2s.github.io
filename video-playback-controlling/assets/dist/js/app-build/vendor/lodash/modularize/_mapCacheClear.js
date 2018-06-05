'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hash = require('./_Hash.js');

var _Hash2 = _interopRequireDefault(_Hash);

var _ListCache = require('./_ListCache.js');

var _ListCache2 = _interopRequireDefault(_ListCache);

var _Map = require('./_Map.js');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash2.default(),
    'map': new (_Map2.default || _ListCache2.default)(),
    'string': new _Hash2.default()
  };
}

exports.default = mapCacheClear;
//# sourceMappingURL=_mapCacheClear.js.map
