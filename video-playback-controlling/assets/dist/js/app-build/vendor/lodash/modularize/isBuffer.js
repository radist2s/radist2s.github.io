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


var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

var _stubFalse = require('./stubFalse.js');

var _stubFalse2 = _interopRequireDefault(_stubFalse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root2.default.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse2.default;

exports.default = isBuffer;
//# sourceMappingURL=isBuffer.js.map
