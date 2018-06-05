import MainView from './views/main'
import {getScrollBarWidth, hasHorizontalScroll} from 'common/scrollbar-utils'
import {onDomReady} from 'common/utils'

function setWindowHeight() {
    const offsetBottom = hasHorizontalScroll() ? getScrollBarWidth() : 0

    window.windowInnerHeight = window.innerHeight - offsetBottom
}

if (window.IS_MOBILE) {
    document.addEventListener('orientationchange', setWindowHeight)
}
else {
    window.addEventListener('resize', setWindowHeight)
}

export default function init() {
    onDomReady(function () {
        setWindowHeight()
        
        new MainView()
    })    
}

init()