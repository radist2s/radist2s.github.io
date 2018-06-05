'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashClear = require('./_hashClear.js');

var _hashClear2 = _interopRequireDefault(_hashClear);

var _hashDelete = require('./_hashDelete.js');

var _hashDelete2 = _interopRequireDefault(_hashDelete);

var _hashGet = require('./_hashGet.js');

var _hashGet2 = _interopRequireDefault(_hashGet);

var _hashHas = require('./_hashHas.js');

var _hashHas2 = _interopRequireDefault(_hashHas);

var _hashSet = require('./_hashSet.js');

var _hashSet2 = _interopRequireDefault(_hashSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear2.default;
Hash.prototype['delete'] = _hashDelete2.default;
Hash.prototype.get = _hashGet2.default;
Hash.prototype.has = _hashHas2.default;
Hash.prototype.set = _hashSet2.default;

exports.default = Hash;
//# sourceMappingURL=_Hash.js.map
