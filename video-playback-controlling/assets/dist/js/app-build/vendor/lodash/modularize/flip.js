'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createWrap = require('./_createWrap.js');

var _createWrap2 = _interopRequireDefault(_createWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for function metadata. */
var WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 * @example
 *
 * var flipped = _.flip(function() {
 *   return _.toArray(arguments);
 * });
 *
 * flipped('a', 'b', 'c', 'd');
 * // => ['d', 'c', 'b', 'a']
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function flip(func) {
  return (0, _createWrap2.default)(func, WRAP_FLIP_FLAG);
}

exports.default = flip;
//# sourceMappingURL=flip.js.map
