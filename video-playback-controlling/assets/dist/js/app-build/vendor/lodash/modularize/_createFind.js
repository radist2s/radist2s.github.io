'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function (collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!(0, _isArrayLike2.default)(collection)) {
      var iteratee = (0, _baseIteratee2.default)(predicate, 3);
      collection = (0, _keys2.default)(collection);
      predicate = function predicate(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

exports.default = createFind;
//# sourceMappingURL=_createFind.js.map
