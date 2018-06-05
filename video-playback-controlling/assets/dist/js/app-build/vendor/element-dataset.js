'use strict';

/**
 * https://github.com/discontinued/element-dataset
 */

/* eslint-env browser */

!function elementDatasetPolyfill() {
    if (document.documentElement.dataset) {
        if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'dataset') && Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'dataset').get) {
            return;
        }
    }

    var descriptor = {};

    descriptor.enumerable = true;

    descriptor.get = function get() {
        var element = this;
        var map = {};
        var attributes = this.attributes;

        function toUpperCase(n0) {
            return n0.charAt(1).toUpperCase();
        }

        function getter() {
            return this.value;
        }

        function setter(name, value) {
            if (typeof value !== 'undefined') {
                this.setAttribute(name, value);
            } else {
                this.removeAttribute(name);
            }
        }

        for (var i = 0; i < attributes.length; i += 1) {
            var attribute = attributes[i];

            // This test really should allow any XML Name without
            // colons (and non-uppercase for XHTML)

            if (attribute && attribute.name && /^data-\w[\w-]*$/.test(attribute.name)) {
                var name = attribute.name;
                var value = attribute.value;

                // Change to CamelCase

                var propName = name.substr(5).replace(/-./g, toUpperCase);

                Object.defineProperty(map, propName, {
                    enumerable: descriptor.enumerable,
                    get: getter.bind({ value: value || '' }),
                    set: setter.bind(element, name)
                });
            }
        }
        return map;
    };

    Object.defineProperty(HTMLElement.prototype, 'dataset', descriptor);
}();
//# sourceMappingURL=element-dataset.js.map
