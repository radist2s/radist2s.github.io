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
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes the method at `object[key]` with `partials`
 * prepended to the arguments it receives.
 *
 * This method differs from `_.bind` by allowing bound functions to reference
 * methods that may be redefined or don't yet exist. See
 * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
 * for more details.
 *
 * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Function
 * @param {Object} object The object to invoke the method on.
 * @param {string} key The key of the method.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var object = {
 *   'user': 'fred',
 *   'greet': function(greeting, punctuation) {
 *     return greeting + ' ' + this.user + punctuation;
 *   }
 * };
 *
 * var bound = _.bindKey(object, 'greet', 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * object.greet = function(greeting, punctuation) {
 *   return greeting + 'ya ' + this.user + punctuation;
 * };
 *
 * bound('!');
 * // => 'hiya fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bindKey(object, 'greet', _, '!');
 * bound('hi');
 * // => 'hiya fred!'
 */
var bindKey = (0, _baseRest2.default)(function (object, key, partials) {
  var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
  if (partials.length) {
    var holders = (0, _replaceHolders2.default)(partials, (0, _getHolder2.default)(bindKey));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return (0, _createWrap2.default)(key, bitmask, object, partials, holders);
});

// Assign default placeholders.
bindKey.placeholder = {};

exports.default = bindKey;
//# sourceMappingURL=bindKey.js.map
