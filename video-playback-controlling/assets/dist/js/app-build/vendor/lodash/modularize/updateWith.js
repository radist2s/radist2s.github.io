'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseUpdate = require('./_baseUpdate.js');

var _baseUpdate2 = _interopRequireDefault(_baseUpdate);

var _castFunction = require('./_castFunction.js');

var _castFunction2 = _interopRequireDefault(_castFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.update` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.updateWith(object, '[0][1]', _.constant('a'), Object);
 * // => { '0': { '1': 'a' } }
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function updateWith(object, path, updater, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : (0, _baseUpdate2.default)(object, path, (0, _castFunction2.default)(updater), customizer);
}

exports.default = updateWith;
//# sourceMappingURL=updateWith.js.map
