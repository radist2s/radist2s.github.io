'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A `baseRest` alias which can be replaced with `identity` by module
 * replacement plugins.
 *
 * @private
 * @type {Function}
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
var castRest = _baseRest2.default;

exports.default = castRest;
//# sourceMappingURL=_castRest.js.map
