(function(rot, factory) {
    // Set up Backbone appropriately for the environment.
    if (typeof define === 'function' && define.amd) {
        define(['./exoskeleton', './exoskeleton.nativeajax', './exoskeleton.nativeview'], factory);
    } else if (typeof exports !== 'undefined') {
        var Backbone, nativeAjax, NativeView
        try { Backbone = require('./exoskeleton'); } catch(e) { }
        try { nativeAjax = require('./exoskeleton.nativeajax'); } catch(e) { }
        try { NativeView = require('./exoskeleton.nativeview'); } catch(e) { }
        exports.__esModule = true
        module.exports = factory(Backbone, nativeAjax, NativeView);
    } else {
        root.Backbone = Backbone
        root.nativeAjax = nativeAjax
        root.NativeView = NativeView
    }

})(this, function(Backbone, nativeAjax, NativeView) {
    'use strict';

    Backbone.ajax = nativeAjax

    Backbone.View = NativeView

    var ElementProto = (typeof Element !== 'undefined' && Element.prototype) || {};

    var elementAddEventListener = ElementProto.addEventListener ? function (eventName, listener, useCapture) {
        return this.addEventListener(eventName, listener, useCapture)
    } : function (eventName, listener) {
        return this.attachEvent('on' + eventName, listener);
    }

    var elementRemoveEventListener = ElementProto.removeEventListener ? function (eventName, listener, useCapture) {
        return this.removeEventListener(eventName, listener, useCapture)
    } : function (eventName, listener) {
        return this.detachEvent('on' + eventName, listener);
    }

// Find the right `Element#matches` for IE>=9 and modern browsers.
    var matchesSelector = ElementProto.matches ||
        ElementProto.webkitMatchesSelector ||
        ElementProto.mozMatchesSelector ||
        ElementProto.msMatchesSelector ||
        ElementProto.oMatchesSelector ||
        // Make our own `Element#matches` for IE8
        function (selector) {
            // Use querySelectorAll to find all elements matching the selector,
            // then check if the given element is included in that list.
            // Executing the query on the parentNode reduces the resulting nodeList,
            // (document doesn't have a parentNode).
            var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
            return ~indexOf(nodeList, this);
        };

    var eventParser = /^([\S]+):capture$/i

    var paddedLt = /^\s*</;

    var supportsPassiveEvents = false
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveEvents = true
            }
        });
        window.addEventListener('test', null, opts)
    } catch (e) {
    }

    Backbone.View.prototype.delegate = function (eventNameOrigin, selector, listener) {
        if (!this.el) {
            return
        }

        var eventName = eventNameOrigin,
            eventMatches = eventName.match(eventParser),
            capture = false

        if (eventMatches) {
            eventName = eventMatches[1]

            if (supportsPassiveEvents) {
                capture = {passive: false, capture: true}
            }
            else {
                capture = true
            }
        }

        if (typeof selector === 'function') {
            listener = selector;
            selector = null;
        }

        var root = this.el;
        var handler = selector ? function (e) {
            var node = e.target || e.srcElement;
            for (; node && node != root; node = node.parentNode) {
                if (matchesSelector.call(node, selector)) {
                    e.delegateTarget = node;
                    listener(e);
                }
            }
        } : listener;

        elementAddEventListener.call(this.el, eventName, handler, capture);
        this._domEvents.push({eventName: eventNameOrigin, handler: handler, listener: listener, selector: selector});
        return handler;
    }

    Backbone.View.prototype.undelegate = function (eventName, selector, listener) {
        var eventMatches = eventName.match(eventParser),
            capture = false

        if (eventMatches) {
            eventName = eventMatches[1]
            capture = true
        }

        if (typeof selector === 'function') {
            listener = selector;
            selector = null;
        }

        if (this.el) {
            var handlers = this._domEvents.slice();
            var i = handlers.length;
            while (i--) {
                var item = handlers[i];

                var match = item.eventName === eventName &&
                    (listener ? item.listener === listener : true) &&
                    (selector ? item.selector === selector : true);

                if (!match) continue;

                elementRemoveEventListener.call(this.el, item.eventName, item.handler, capture);
                this._domEvents.splice(i, 1);
            }
        }
        return this;
    }

// Remove all events created with `delegate` from `el`
    Backbone.View.prototype.undelegateEvents = function () {
        if (this.el) {
            for (var i = 0, len = this._domEvents.length; i < len; i++) {
                var item = this._domEvents[i];

                var eventMatches = item.eventName.match(eventParser),
                    capture = false

                if (eventMatches) {
                    item.eventName = eventMatches[1]
                    capture = true
                }

                elementRemoveEventListener.call(this.el, item.eventName, item.handler, capture);
            }
            this._domEvents.length = 0;
        }
        return this;
    }

    Backbone.View.prototype._setElement = function (element) {
        if (typeof element == 'string') {
            if (paddedLt.test(element)) {
                var el = document.createElement('div');
                el.innerHTML = element;
                this.el = el.firstChild;
            }
            else {
                this.el = document.querySelector(element);
            }
        }
        else if (element && element.length && !(element instanceof window.constructor)) {
            this.el = element[0];
        }
        else {
            this.el = element;
        }
    }

    var optionalParam = /\((.*?)\)/g;
    var namedParam    = /(\(\?)?:\w+/g;
    var splatParam    = /\*\w+/g;
    var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    Backbone.Router.prototype._routeToRegExp = function _routeToRegExpCustom(route) {
        route = route.replace(escapeRegExp, '\\$&')
            .replace(optionalParam, '(?:$1)?')
            .replace(namedParam, function(match, optional) {
                return optional ? match : '([^/?]+)';
            })
            .replace(splatParam, '([^?]*?)');

        return new RegExp('^' + route + '([\\s\\S]*)?$');
    }

    return Backbone
});