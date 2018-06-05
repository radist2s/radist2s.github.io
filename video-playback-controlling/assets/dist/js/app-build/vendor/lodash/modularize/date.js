'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _now = require('./now.js');

Object.defineProperty(exports, 'now', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_now).default;
  }
});

var _dateDefault = require('./date.default.js');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dateDefault).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=date.js.map
