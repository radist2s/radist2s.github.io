'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListCache = require('./_ListCache.js');

var _ListCache2 = _interopRequireDefault(_ListCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache2.default();
  this.size = 0;
}

exports.default = stackClear;
//# sourceMappingURL=_stackClear.js.map
