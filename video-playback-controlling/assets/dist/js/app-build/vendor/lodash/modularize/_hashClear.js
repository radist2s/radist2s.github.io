'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = require('./_nativeCreate.js');

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate2.default ? (0, _nativeCreate2.default)(null) : {};
  this.size = 0;
}

exports.default = hashClear;
//# sourceMappingURL=_hashClear.js.map
