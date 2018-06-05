System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function rafPolyfill() {
        !window.requestAnimationFrame && (window.requestAnimationFrame = null);
        !window.cancelAnimationFrame && (window.cancelAnimationFrame = null);
        var lastTime = 0, vendors = ['ms', 'moz', 'webkit', 'o'];
        var now = Date.now || function () {
            return new Date().getTime();
        };
        if (!cancelAnimationFrame) {
            for (var i = 0; i < vendors.length && !requestAnimationFrame; ++i) {
                window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame =
                    window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
            }
        }
        if (!requestAnimationFrame) {
            window.requestAnimationFrame = function (callback) {
                var currTime = now(), timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }
    exports_1("rafPolyfill", rafPolyfill);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=request-animation-frame.js.map
