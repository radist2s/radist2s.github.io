'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePickBy = require('./_basePickBy.js');

var _basePickBy2 = _interopRequireDefault(_basePickBy);

var _hasIn = require('./hasIn.js');

var _hasIn2 = _interopRequireDefault(_hasIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return (0, _basePickBy2.default)(object, paths, function (value, path) {
    return (0, _hasIn2.default)(object, path);
  });
}

exports.default = basePick;
//# sourceMappingURL=_basePick.js.map
