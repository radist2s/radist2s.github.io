'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = require('./_getNative.js');

var _getNative2 = _interopRequireDefault(_getNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineProperty = function () {
  try {
    var func = (0, _getNative2.default)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

exports.default = defineProperty;
//# sourceMappingURL=_defineProperty.js.map
