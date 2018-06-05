'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Lodash (Custom Build) <https://lodash.com/>
                                                                                                                                                                                                                                                                               * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
                                                                                                                                                                                                                                                                               * Copyright JS Foundation and other contributors <https://js.foundation/>
                                                                                                                                                                                                                                                                               * Released under MIT license <https://lodash.com/license>
                                                                                                                                                                                                                                                                               * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                                                                                                                                                                                                                                                                               * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                                                                                                                                                                                                                                                                               */


var _baseGetTag = require('./_baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == symbolTag;
}

exports.default = isSymbol;
//# sourceMappingURL=isSymbol.js.map
