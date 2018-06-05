'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createCompounder = require('./_createCompounder.js');

var _createCompounder2 = _interopRequireDefault(_createCompounder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = (0, _createCompounder2.default)(function (result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
}); /**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
exports.default = kebabCase;
//# sourceMappingURL=kebabCase.js.map
