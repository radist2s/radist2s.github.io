System.register(["./views/main", "common/scrollbar-utils", "common/utils"], function (exports_1, context_1) {
    "use strict";
    var main_1, scrollbar_utils_1, utils_1;
    var __moduleName = context_1 && context_1.id;
    function setWindowHeight() {
        var offsetBottom = scrollbar_utils_1.hasHorizontalScroll() ? scrollbar_utils_1.getScrollBarWidth() : 0;
        window.windowInnerHeight = window.innerHeight - offsetBottom;
    }
    function init() {
        utils_1.onDomReady(function () {
            setWindowHeight();
            new main_1.default();
        });
    }
    exports_1("default", init);
    return {
        setters: [
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (scrollbar_utils_1_1) {
                scrollbar_utils_1 = scrollbar_utils_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            if (window.IS_MOBILE) {
                document.addEventListener('orientationchange', setWindowHeight);
            }
            else {
                window.addEventListener('resize', setWindowHeight);
            }
            init();
        }
    };
});
//# sourceMappingURL=index.js.map
