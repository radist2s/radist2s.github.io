'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return _root2.default.Date.now();
}; /**
    * Lodash (Custom Build) <https://lodash.com/>
    * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
    * Copyright JS Foundation and other contributors <https://js.foundation/>
    * Released under MIT license <https://lodash.com/license>
    * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
    * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    */
exports.default = now;
//# sourceMappingURL=now.js.map
