'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRest = require('./_baseRest.js');

var _baseRest2 = _interopRequireDefault(_baseRest);

var _createWrap = require('./_createWrap.js');

var _createWrap2 = _interopRequireDefault(_createWrap);

var _getHolder = require('./_getHolder.js');

var _getHolder2 = _interopRequireDefault(_getHolder);

var _replaceHolders = require('./_replaceHolders.js');

var _replaceHolders2 = _interopRequireDefault(_replaceHolders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for function metadata. */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = (0, _baseRest2.default)(function (func, partials) {
  var holders = (0, _replaceHolders2.default)(partials, (0, _getHolder2.default)(partial));
  return (0, _createWrap2.default)(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

exports.default = partial;
//# sourceMappingURL=partial.js.map
