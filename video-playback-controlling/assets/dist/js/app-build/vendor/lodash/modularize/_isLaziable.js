'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LazyWrapper = require('./_LazyWrapper.js');

var _LazyWrapper2 = _interopRequireDefault(_LazyWrapper);

var _getData = require('./_getData.js');

var _getData2 = _interopRequireDefault(_getData);

var _getFuncName = require('./_getFuncName.js');

var _getFuncName2 = _interopRequireDefault(_getFuncName);

var _wrapperLodash = require('./wrapperLodash.js');

var _wrapperLodash2 = _interopRequireDefault(_wrapperLodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = (0, _getFuncName2.default)(func),
      other = _wrapperLodash2.default[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper2.default.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = (0, _getData2.default)(other);
  return !!data && func === data[0];
}

exports.default = isLaziable;
//# sourceMappingURL=_isLaziable.js.map
