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
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = (0, _baseRest2.default)(function (func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = (0, _replaceHolders2.default)(partials, (0, _getHolder2.default)(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return (0, _createWrap2.default)(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

exports.default = bind;
//# sourceMappingURL=bind.js.map
