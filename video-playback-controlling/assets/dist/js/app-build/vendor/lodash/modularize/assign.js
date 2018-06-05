'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = require('./_assignValue.js');

var _assignValue2 = _interopRequireDefault(_assignValue);

var _copyObject = require('./_copyObject.js');

var _copyObject2 = _interopRequireDefault(_copyObject);

var _createAssigner = require('./_createAssigner.js');

var _createAssigner2 = _interopRequireDefault(_createAssigner);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isPrototype = require('./_isPrototype.js');

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = (0, _createAssigner2.default)(function (object, source) {
  if ((0, _isPrototype2.default)(source) || (0, _isArrayLike2.default)(source)) {
    (0, _copyObject2.default)(source, (0, _keys2.default)(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      (0, _assignValue2.default)(object, key, source[key]);
    }
  }
});

exports.default = assign;
//# sourceMappingURL=assign.js.map
