'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject = require('./isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return (0, _isPlainObject2.default)(value) ? undefined : value;
}

exports.default = customOmitClone;
//# sourceMappingURL=_customOmitClone.js.map
