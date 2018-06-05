'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = require('./_copyObject.js');

var _copyObject2 = _interopRequireDefault(_copyObject);

var _createAssigner = require('./_createAssigner.js');

var _createAssigner2 = _interopRequireDefault(_createAssigner);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.assign` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignInWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignWith = (0, _createAssigner2.default)(function (object, source, srcIndex, customizer) {
  (0, _copyObject2.default)(source, (0, _keys2.default)(source), object, customizer);
}); /**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
exports.default = assignWith;
//# sourceMappingURL=assignWith.js.map
