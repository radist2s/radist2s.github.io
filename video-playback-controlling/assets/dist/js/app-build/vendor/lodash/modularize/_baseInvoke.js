'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = require('./_apply.js');

var _apply2 = _interopRequireDefault(_apply);

var _castPath = require('./_castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

var _parent = require('./_parent.js');

var _parent2 = _interopRequireDefault(_parent);

var _toKey = require('./_toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  path = (0, _castPath2.default)(path, object);
  object = (0, _parent2.default)(object, path);
  var func = object == null ? object : object[(0, _toKey2.default)((0, _last2.default)(path))];
  return func == null ? undefined : (0, _apply2.default)(func, object, args);
}

exports.default = baseInvoke;
//# sourceMappingURL=_baseInvoke.js.map
