'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constant = require('./constant.js');

var _constant2 = _interopRequireDefault(_constant);

var _createInverter = require('./_createInverter.js');

var _createInverter2 = _interopRequireDefault(_createInverter);

var _identity = require('./identity.js');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = (0, _createInverter2.default)(function (result, value, key) {
  result[value] = key;
}, (0, _constant2.default)(_identity2.default)); /**
                                                  * Lodash (Custom Build) <https://lodash.com/>
                                                  * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
                                                  * Copyright JS Foundation and other contributors <https://js.foundation/>
                                                  * Released under MIT license <https://lodash.com/license>
                                                  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                                                  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                                                  */
exports.default = invert;
//# sourceMappingURL=invert.js.map
