'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _baseMatches = require('./_baseMatches.js');

var _baseMatches2 = _interopRequireDefault(_baseMatches);

var _baseMatchesProperty = require('./_baseMatchesProperty.js');

var _baseMatchesProperty2 = _interopRequireDefault(_baseMatchesProperty);

var _identity = require('./identity.js');

var _identity2 = _interopRequireDefault(_identity);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _property = require('./property.js');

var _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity2.default;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return (0, _isArray2.default)(value) ? (0, _baseMatchesProperty2.default)(value[0], value[1]) : (0, _baseMatches2.default)(value);
  }
  return (0, _property2.default)(value);
}

exports.default = baseIteratee;
//# sourceMappingURL=_baseIteratee.js.map
