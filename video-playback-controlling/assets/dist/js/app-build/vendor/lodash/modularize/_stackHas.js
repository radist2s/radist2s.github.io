"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

exports.default = stackHas;
//# sourceMappingURL=_stackHas.js.map
