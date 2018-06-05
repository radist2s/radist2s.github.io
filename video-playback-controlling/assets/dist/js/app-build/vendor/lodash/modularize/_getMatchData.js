'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isStrictComparable = require('./_isStrictComparable.js');

var _isStrictComparable2 = _interopRequireDefault(_isStrictComparable);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0, _keys2.default)(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, (0, _isStrictComparable2.default)(value)];
  }
  return result;
}

exports.default = getMatchData;
//# sourceMappingURL=_getMatchData.js.map
