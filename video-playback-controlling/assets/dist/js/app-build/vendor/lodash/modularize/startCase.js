'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createCompounder = require('./_createCompounder.js');

var _createCompounder2 = _interopRequireDefault(_createCompounder);

var _upperFirst = require('./upperFirst.js');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var startCase = (0, _createCompounder2.default)(function (result, word, index) {
  return result + (index ? ' ' : '') + (0, _upperFirst2.default)(word);
});

exports.default = startCase;
//# sourceMappingURL=startCase.js.map
