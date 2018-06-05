'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arraySample = require('./_arraySample.js');

var _arraySample2 = _interopRequireDefault(_arraySample);

var _baseSample = require('./_baseSample.js');

var _baseSample2 = _interopRequireDefault(_baseSample);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
function sample(collection) {
  var func = (0, _isArray2.default)(collection) ? _arraySample2.default : _baseSample2.default;
  return func(collection);
} /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
exports.default = sample;
//# sourceMappingURL=sample.js.map
