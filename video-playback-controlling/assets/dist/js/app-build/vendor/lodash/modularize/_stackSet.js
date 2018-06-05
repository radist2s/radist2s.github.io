'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListCache = require('./_ListCache.js');

var _ListCache2 = _interopRequireDefault(_ListCache);

var _Map = require('./_Map.js');

var _Map2 = _interopRequireDefault(_Map);

var _MapCache = require('./_MapCache.js');

var _MapCache2 = _interopRequireDefault(_MapCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache2.default) {
    var pairs = data.__data__;
    if (!_Map2.default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache2.default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

exports.default = stackSet;
//# sourceMappingURL=_stackSet.js.map
