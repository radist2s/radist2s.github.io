'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./_baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0, _isObject2.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag2.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

exports.default = isFunction;
//# sourceMappingURL=isFunction.js.map
