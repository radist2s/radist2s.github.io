'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = require('./_apply.js');

var _apply2 = _interopRequireDefault(_apply);

var _assignInWith = require('./assignInWith.js');

var _assignInWith2 = _interopRequireDefault(_assignInWith);

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _customDefaultsAssignIn = require('./_customDefaultsAssignIn.js');

var _customDefaultsAssignIn2 = _interopRequireDefault(_customDefaultsAssignIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var defaults = (0, _baseRest2.default)(function (args) {
  args.push(undefined, _customDefaultsAssignIn2.default);
  return (0, _apply2.default)(_assignInWith2.default, undefined, args);
});

exports.default = defaults;
//# sourceMappingURL=defaults.js.map
