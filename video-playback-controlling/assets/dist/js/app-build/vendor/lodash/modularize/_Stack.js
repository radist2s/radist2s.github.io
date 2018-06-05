'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListCache = require('./_ListCache.js');

var _ListCache2 = _interopRequireDefault(_ListCache);

var _stackClear = require('./_stackClear.js');

var _stackClear2 = _interopRequireDefault(_stackClear);

var _stackDelete = require('./_stackDelete.js');

var _stackDelete2 = _interopRequireDefault(_stackDelete);

var _stackGet = require('./_stackGet.js');

var _stackGet2 = _interopRequireDefault(_stackGet);

var _stackHas = require('./_stackHas.js');

var _stackHas2 = _interopRequireDefault(_stackHas);

var _stackSet = require('./_stackSet.js');

var _stackSet2 = _interopRequireDefault(_stackSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache2.default(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear2.default;
Stack.prototype['delete'] = _stackDelete2.default;
Stack.prototype.get = _stackGet2.default;
Stack.prototype.has = _stackHas2.default;
Stack.prototype.set = _stackSet2.default;

exports.default = Stack;
//# sourceMappingURL=_Stack.js.map
