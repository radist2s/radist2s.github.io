'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayAggregator = require('./_arrayAggregator.js');

var _arrayAggregator2 = _interopRequireDefault(_arrayAggregator);

var _baseAggregator = require('./_baseAggregator.js');

var _baseAggregator2 = _interopRequireDefault(_baseAggregator);

var _baseIteratee = require('./_baseIteratee.js');

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function (collection, iteratee) {
    var func = (0, _isArray2.default)(collection) ? _arrayAggregator2.default : _baseAggregator2.default,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, (0, _baseIteratee2.default)(iteratee, 2), accumulator);
  };
}

exports.default = createAggregator;
//# sourceMappingURL=_createAggregator.js.map
