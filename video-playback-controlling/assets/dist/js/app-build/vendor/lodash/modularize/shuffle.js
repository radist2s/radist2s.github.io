'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayShuffle = require('./_arrayShuffle.js');

var _arrayShuffle2 = _interopRequireDefault(_arrayShuffle);

var _baseShuffle = require('./_baseShuffle.js');

var _baseShuffle2 = _interopRequireDefault(_baseShuffle);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = (0, _isArray2.default)(collection) ? _arrayShuffle2.default : _baseShuffle2.default;
  return func(collection);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = shuffle;
//# sourceMappingURL=shuffle.js.map
