'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = require('./_assignValue.js');

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseAssignValue = require('./_baseAssignValue.js');

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0, _baseAssignValue2.default)(object, key, newValue);
    } else {
      (0, _assignValue2.default)(object, key, newValue);
    }
  }
  return object;
}

exports.default = copyObject;
//# sourceMappingURL=_copyObject.js.map
