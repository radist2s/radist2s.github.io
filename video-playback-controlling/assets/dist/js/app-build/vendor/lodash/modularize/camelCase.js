'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _capitalize = require('./capitalize.js');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _createCompounder = require('./_createCompounder.js');

var _createCompounder2 = _interopRequireDefault(_createCompounder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var camelCase = (0, _createCompounder2.default)(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? (0, _capitalize2.default)(word) : word);
});

exports.default = camelCase;
//# sourceMappingURL=camelCase.js.map
