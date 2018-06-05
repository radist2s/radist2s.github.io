let scrollBarWidth;

export function getScrollBarWidth() {
    if (scrollBarWidth !== undefined) {
        return scrollBarWidth
    }

    const scrollDetector = document.createElement('div');

    scrollDetector.style.width = '50px'
    scrollDetector.style.height = '50px'
    scrollDetector.style.overflow = 'visible'
    scrollDetector.style.position = 'absolute'
    scrollDetector.style.visibility = 'hidden'

    document.body.appendChild(scrollDetector)

    const widthWithoutScrollBar = scrollDetector.clientWidth;

    scrollDetector.style.overflow = 'scroll'

    const widthWithScrollBar = scrollDetector.clientWidth;

    document.body.removeChild(scrollDetector)

    return scrollBarWidth = widthWithoutScrollBar - widthWithScrollBar
}

export function hasVerticalScroll(node?: Node) {
    return hasScroll(node, 'vertical')
}

export function hasHorizontalScroll(node?: Node) {
    return hasScroll(node, 'horizontal')
}

function hasScroll(node?: Node, axis?: string) {
    axis = axis ? String(axis).toLowerCase() : ''

    const X = 'x',
        Y = 'y';

    switch (axis) {
        case 'horizontal':
        case 'x':
            axis = X
            break
        default:
            axis = Y
            break
    }

    const windowInnerSize = axis === Y ? window.innerHeight : window.innerWidth,
        overflowProp = axis === Y ? 'overflowY' : 'overflowX',
        offsetSizeProp = axis === Y ? 'offsetHeight' : 'offsetWidth',
        scrollSizeProp = axis === Y ? 'scrollHeight' : 'scrollWidth';

    if (!node) {
        if (windowInnerSize) {
            const overflow = getComputedStyle(document.documentElement)[overflowProp];

            return document.body[offsetSizeProp] > windowInnerSize || overflow === 'scroll'
        }
        else {
            return document.documentElement[scrollSizeProp] >
                document.documentElement[offsetSizeProp] ||
                document.body[scrollSizeProp] > document.body[offsetSizeProp]
        }
    }
    else {
        return node[scrollSizeProp] > node[offsetSizeProp]
    }
}