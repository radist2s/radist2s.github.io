'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createCompounder = require('./_createCompounder.js');

var _createCompounder2 = _interopRequireDefault(_createCompounder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.upperCase('--foo-bar');
 * // => 'FOO BAR'
 *
 * _.upperCase('fooBar');
 * // => 'FOO BAR'
 *
 * _.upperCase('__foo_bar__');
 * // => 'FOO BAR'
 */
var upperCase = (0, _createCompounder2.default)(function (result, word, index) {
  return result + (index ? ' ' : '') + word.toUpperCase();
}); /**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
exports.default = upperCase;
//# sourceMappingURL=upperCase.js.map
