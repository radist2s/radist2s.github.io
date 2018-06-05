System.register([], function (exports_1, context_1) {
    "use strict";
    var scrollBarWidth;
    var __moduleName = context_1 && context_1.id;
    function getScrollBarWidth() {
        if (scrollBarWidth !== undefined) {
            return scrollBarWidth;
        }
        var scrollDetector = document.createElement('div');
        scrollDetector.style.width = '50px';
        scrollDetector.style.height = '50px';
        scrollDetector.style.overflow = 'visible';
        scrollDetector.style.position = 'absolute';
        scrollDetector.style.visibility = 'hidden';
        document.body.appendChild(scrollDetector);
        var widthWithoutScrollBar = scrollDetector.clientWidth;
        scrollDetector.style.overflow = 'scroll';
        var widthWithScrollBar = scrollDetector.clientWidth;
        document.body.removeChild(scrollDetector);
        return scrollBarWidth = widthWithoutScrollBar - widthWithScrollBar;
    }
    exports_1("getScrollBarWidth", getScrollBarWidth);
    function hasVerticalScroll(node) {
        return hasScroll(node, 'vertical');
    }
    exports_1("hasVerticalScroll", hasVerticalScroll);
    function hasHorizontalScroll(node) {
        return hasScroll(node, 'horizontal');
    }
    exports_1("hasHorizontalScroll", hasHorizontalScroll);
    function hasScroll(node, axis) {
        axis = axis ? String(axis).toLowerCase() : '';
        var X = 'x', Y = 'y';
        switch (axis) {
            case 'horizontal':
            case 'x':
                axis = X;
                break;
            default:
                axis = Y;
                break;
        }
        var windowInnerSize = axis === Y ? window.innerHeight : window.innerWidth, overflowProp = axis === Y ? 'overflowY' : 'overflowX', offsetSizeProp = axis === Y ? 'offsetHeight' : 'offsetWidth', scrollSizeProp = axis === Y ? 'scrollHeight' : 'scrollWidth';
        if (!node) {
            if (windowInnerSize) {
                var overflow = getComputedStyle(document.documentElement)[overflowProp];
                return document.body[offsetSizeProp] > windowInnerSize || overflow === 'scroll';
            }
            else {
                return document.documentElement[scrollSizeProp] >
                    document.documentElement[offsetSizeProp] ||
                    document.body[scrollSizeProp] > document.body[offsetSizeProp];
            }
        }
        else {
            return node[scrollSizeProp] > node[offsetSizeProp];
        }
    }
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=scrollbar-utils.js.map
