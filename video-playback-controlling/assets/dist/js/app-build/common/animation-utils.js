System.register(["./request-animation-frame", "./utils"], function (exports_1, context_1) {
    "use strict";
    var request_animation_frame_1, utils_1, transitionEventName, transformStylePropertyName, transitionStyleProperties, isTransformSupport3dSupported, fade, RafAnimationQueue;
    var __moduleName = context_1 && context_1.id;
    function getTransitionEndEventName() {
        if (transitionEventName !== undefined) {
            return transitionEventName;
        }
        var detectedTransition;
        var el = document.createElement('transitiondetector'), transitions = {
            'transition': 'transitionend',
            // see also http://ianlunn.co.uk/articles/opera-12-otransitionend-bugs-and-workarounds/
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'webkitTransition': 'webkitTransitionEnd'
        };
        Object.keys(transitions).some(function (transition) {
            if (el.style[transition] !== undefined) {
                detectedTransition = transitions[transition];
                return true;
            }
            return false;
        });
        if (!detectedTransition) {
            detectedTransition = false;
        }
        return (transitionEventName = detectedTransition);
    }
    exports_1("getTransitionEndEventName", getTransitionEndEventName);
    function getTransformStyleProperty(append) {
        if (append === void 0) { append = ''; }
        if (transformStylePropertyName !== undefined) {
            return transformStylePropertyName + append;
        }
        var detectedTransform;
        var el = document.createElement('transformdetector'), transforms = [
            'transform',
            'OTransform',
            'msTransform',
            'MozTransform',
            'webkitTransform'
        ];
        transforms.some && transforms.some(function (transform) {
            if (el.style[transform] !== undefined) {
                detectedTransform = transform;
                return true;
            }
        });
        if (!detectedTransform) {
            detectedTransform = '';
        }
        return (transformStylePropertyName = detectedTransform) + append;
    }
    exports_1("getTransformStyleProperty", getTransformStyleProperty);
    function getTransitionStyleProperty(property) {
        property = property || 'transition';
        if (transitionStyleProperties[property] !== undefined) {
            return transitionStyleProperties[property];
        }
        if (transitionStyleProperties.prefix === undefined) {
            var transformStyleProperty = getTransformStyleProperty();
            if (!transformStyleProperty) {
                return transitionStyleProperties[property] = '';
            }
            transitionStyleProperties.prefix = transformStyleProperty.replace(/transform/i, '');
        }
        var prefix = transitionStyleProperties.prefix;
        var propertyPrefixed = !prefix ? property : prefix + property.charAt(0).toUpperCase() + property.slice(1); // prefix + capitalized
        return transitionStyleProperties[property] = propertyPrefixed;
    }
    exports_1("getTransitionStyleProperty", getTransitionStyleProperty);
    function transformSupport3d() {
        if (isTransformSupport3dSupported !== undefined) {
            return isTransformSupport3dSupported;
        }
        var transform = getTransformStyleProperty();
        if (!transform) {
            return (isTransformSupport3dSupported = false);
        }
        var el = document.createElement('transformdetector');
        var defaultTransformData = el[transform];
        el[transform] = 'translateZ(0)';
        if (!el[transform] || el[transform] == defaultTransformData) {
            return (isTransformSupport3dSupported = false);
        }
        else {
            return (isTransformSupport3dSupported = true);
        }
    }
    exports_1("transformSupport3d", transformSupport3d);
    return {
        setters: [
            function (request_animation_frame_1_1) {
                request_animation_frame_1 = request_animation_frame_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            request_animation_frame_1.rafPolyfill();
            transitionStyleProperties = {};
            (function (fade) {
                var finishTransitionEvent = 'finishTransition';
                var cancelTransitionEvent = 'cancelTransition';
                var dataInitialOpacityAttr = 'data-initial-opacity';
                var displayAsAttr = 'data-display-as';
                function toggle(el, show, callback, layoutChangedCallback, displayAs) {
                    if (displayAs === void 0) { displayAs = 'block'; }
                    cancel(el);
                    var animationEndCallback, removeListeners, transitionEnd = getTransitionEndEventName();
                    animationEndCallback = function (e) {
                        if (e && e.type !== finishTransitionEvent && (e.target !== el || e.propertyName !== 'opacity')) {
                            return;
                        }
                        removeListeners();
                        if (!show) {
                            el.style.display = 'none';
                            el.style.opacity = '';
                        }
                        utils_1.runCallback(callback);
                    };
                    removeListeners = function () {
                        el.removeEventListener(transitionEnd, animationEndCallback);
                        el.removeEventListener(finishTransitionEvent, animationEndCallback);
                        el.removeEventListener(cancelTransitionEvent, removeListeners);
                    };
                    el.addEventListener(transitionEnd, animationEndCallback);
                    el.addEventListener(finishTransitionEvent, animationEndCallback);
                    el.addEventListener(cancelTransitionEvent, removeListeners);
                    var nextOpacity;
                    var elComputedStyle = getComputedStyle(el);
                    if (show) {
                        nextOpacity = el.hasAttribute(dataInitialOpacityAttr) ? parseFloat(el.getAttribute(dataInitialOpacityAttr)) : 1;
                        if (elComputedStyle.display === 'none') {
                            el.style.opacity = String(0);
                            el.style.display = '';
                            if (getComputedStyle(el).display === 'none') {
                                el.style.display = el.getAttribute(displayAsAttr) || displayAs;
                            }
                        }
                        else {
                            if (parseFloat(el.style.opacity) === 0) {
                                el.style.opacity = String(nextOpacity);
                            }
                            utils_1.runCallback(layoutChangedCallback);
                            return animationEndCallback();
                        }
                    }
                    else if (!show) {
                        if (el.style.display === 'none' || parseFloat(elComputedStyle.opacity) === 0 || (!el.clientHeight && !el.clientWidth)) {
                            return animationEndCallback();
                        }
                        if (!el.hasAttribute(dataInitialOpacityAttr)) {
                            el.setAttribute(dataInitialOpacityAttr, elComputedStyle.opacity);
                        }
                        nextOpacity = 0;
                    }
                    requestAnimationFrame(function () {
                        utils_1.runCallback(layoutChangedCallback);
                        el.style.opacity = String(nextOpacity);
                    });
                    var transitionDuration = getComputedStyle(el)[getTransitionStyleProperty('transitionDuration')];
                    if (!transitionEnd || !transitionDuration || !parseFloat(transitionDuration)) {
                        animationEndCallback();
                    }
                }
                fade.toggle = toggle;
                function finish(node, callback, layoutChangedCallback) {
                    if (node.clientWidth && node.clientHeight) {
                        return;
                    }
                    var finishTransition = document.createEvent('Event');
                    finishTransition.initEvent(finishTransitionEvent, true, true);
                    node.dispatchEvent(finishTransition);
                    utils_1.runCallback(layoutChangedCallback);
                    utils_1.runCallback(callback);
                }
                fade.finish = finish;
                function cancel(node) {
                    var finishTransition = document.createEvent('Event');
                    finishTransition.initEvent(cancelTransitionEvent, true, true);
                    node.dispatchEvent(finishTransition);
                }
                fade.cancel = cancel;
            })(fade || (fade = {}));
            exports_1("fade", fade);
            RafAnimationQueue = /** @class */ (function () {
                function RafAnimationQueue(context) {
                    this.context = context || undefined;
                    this.clear();
                }
                RafAnimationQueue.prototype.add = function (callback, context) {
                    if (callback instanceof Function) {
                        this.queue.push(callback.bind(context || this.context));
                        this.runQueue();
                    }
                    return this;
                };
                RafAnimationQueue.prototype.delay = function () {
                    this.queue.push(null);
                    this.runQueue();
                    return this;
                };
                RafAnimationQueue.prototype.runQueue = function () {
                    if (this.queueInProgress) {
                        return;
                    }
                    this.queueInProgress = true;
                    requestAnimationFrame(this.queueLoop.bind(this));
                };
                RafAnimationQueue.prototype.queueLoop = function () {
                    var callback = this.queue.shift();
                    callback instanceof Function && callback();
                    if (!this.queue.length) {
                        this.queueInProgress = false;
                    }
                    else {
                        requestAnimationFrame(this.queueLoop.bind(this));
                    }
                };
                RafAnimationQueue.prototype.clear = function () {
                    this.queue = [];
                };
                return RafAnimationQueue;
            }());
            exports_1("RafAnimationQueue", RafAnimationQueue);
        }
    };
});
//# sourceMappingURL=animation-utils.js.map
