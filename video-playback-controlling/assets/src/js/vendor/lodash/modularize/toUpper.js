/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
import toString from './toString.js';

/**
 * Converts `string`, as a whole, to upper case just like
 * [String#toUpperCase](https://mdn.io/toUpperCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.toUpper('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * _.toUpper('fooBar');
 * // => 'FOOBAR'
 *
 * _.toUpper('__foo_bar__');
 * // => '__FOO_BAR__'
 */
function toUpper(value) {
  return toString(value).toUpperCase();
}

export default toUpper;
