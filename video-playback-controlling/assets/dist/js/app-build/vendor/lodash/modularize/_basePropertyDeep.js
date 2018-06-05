'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = require('./_baseGet.js');

var _baseGet2 = _interopRequireDefault(_baseGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return (0, _baseGet2.default)(object, path);
  };
}

exports.default = basePropertyDeep;
//# sourceMappingURL=_basePropertyDeep.js.map
