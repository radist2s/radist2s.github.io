export function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

declare global {
    interface String {
        trimSlash(leftTrim?: string | boolean, rightTrim?: string | boolean): string

        trim(): string

        getUrlPath(url?: string | boolean, keepQuery?: boolean): string

        createUrl(uri?: string | Array<string>): string
    }
}

if (!String.prototype.trim) {
    String.prototype.trim = function trim() {
        return this.replace(/^\s+|\s+$/g, '')
    }
}

/**
 * @param {boolean} [leftTrim]
 * @param {boolean} [rightTrim]
 * @returns {string}
 */
String.prototype.trimSlash = function trimSlash(leftTrim, rightTrim) {
    const trimmerPatterns = [];

    if (leftTrim === undefined || leftTrim) {
        trimmerPatterns.push('^\/+')
    }
    if (rightTrim === undefined || rightTrim) {
        trimmerPatterns.push('\/+$')
    }

    const trimmer = new RegExp(trimmerPatterns.join('|'), 'g');

    return this.replace(trimmer, '')
}

String.prototype.getUrlPath = function getUrlPath(url, keepQuery) {
    keepQuery = (keepQuery === undefined && !!url) || keepQuery

    url = (typeof url !== 'boolean' && url !== undefined && String(url)) as string || this as string

    const filters = [];
    filters.push(escapeRegExp(window.appURLs.homeUrl))

    if (typeof keepQuery === 'boolean' && !keepQuery) {
        filters.push('\\?.+')
    }

    return url.replace(new RegExp(filters.join('|'), 'ig'), '').replace(/#.*/g, '').trimSlash(false, true)
}

/**
 * @param {string|string[]}[uri]
 * @returns {string}
 */
String.prototype.createUrl = function createUrl(uri) {
    if (uri instanceof Array) {
        /** @var {Array} uri */
        uri = uri.join('/')
    }

    uri = uri ? String(uri) : ''

    const site_url_base = window.appURLs.homeUrl.trimSlash(false, true);
    const url_path = this.trimSlash() + (uri ? '/' + uri.trimSlash() : '');

    return site_url_base + '/' + url_path.trimSlash()
}

export function userTrailingslashit(path) {
    return path.trimSlash(false, true) + window.appURLs.userTrailingslashit
}

/**
 * @param {Function} callback Callback function of jQuery Deferred
 * @param [args]
 */
export function runCallback(callback: Function, ...args: any[]) {
    if (!callback) {
        return;
    }
    
    if (callback instanceof Function) {
        return callback.apply(this, args)
    }
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function onDomReady(documentReadyCallback: Function) {
    const readyReg = /complete|loaded|interactive/;

    function domLoaded() {
        document.removeEventListener('DOMContentLoaded', domLoaded, false)
        documentReadyCallback()
    }

    if (readyReg.test(document.readyState) && document.body) {
        domLoaded()
    }
    else {
        document.addEventListener('DOMContentLoaded', domLoaded, false)
    }
}

onDomReady(function () {
    function onGaLinkClick(e: MouseEvent) {
        if (e.type === 'mouseup' && e.which !== 2) {
            return
        }

        let node = <HTMLElement> e.target
        let deep = 3

        while (deep-- && node && !node.hasAttribute('data-ga')) {
            node = node.parentElement
        }

        const gaCategory = node && node.getAttribute('data-ga')

        if (!gaCategory) {
            return
        }

        const gaAction = node.getAttribute('data-ga-action')

        if (!gaAction) {
            return
        }

        const
            gaCategories = gaCategory.split('|'),
            gaActions = gaAction.split('|'),
            gaDescription = node.getAttribute('data-ga-desc') || node.getAttribute('data-ga-description') || '';

        gaCategories.forEach(function (cat) {
            gaActions.forEach(function (act) {
                //_gaq.push(['_trackEvent', cat, act, description])
                // window.ga && ga('send', 'event', cat, act, gaDescription)
                gaTrackEvent(cat, act, gaDescription)
            })
        })
    }

    document.addEventListener('click', onGaLinkClick)
    document.addEventListener('mouseup', onGaLinkClick)
})

type GTagAction = {
    event_category: string
    event_action: string | number
    event_label?: string | number
}

export function gaTrackEvent(cat: string, act?: string | number | GTagAction, desc?: string | number, yaVisitParams?: object) {
    window._gaq && _gaq.push(['_trackEvent', cat, act, desc])

    window.ga && ga('send', 'event', cat, String(act), desc)

    if (!yaVisitParams) {
        if (desc) {
            yaVisitParams = {
                [cat]: {[<any>act]: desc}
            }
        }
        else {
            yaVisitParams = {
                [cat]: act
            }
        }
    }

    window.yaCounterInstance && yaCounterInstance.params(yaVisitParams)

    window.top100Counter && top100Counter.sendCustomVars(yaVisitParams)

    if (window.gtag) {
        let actionParams: GTagAction

        if (typeof act === 'number' || typeof act === 'string' || act instanceof String) {
            actionParams = {
                event_category: String(cat),
                event_action: String(act)
            }

            if (desc) {
                actionParams.event_label = String(desc)
            }
        }
        else {
            actionParams = act

            cat = cat || actionParams.event_category
        }

        gtag('event', cat, actionParams)
    }
}

export function gaTrackPageView(path = location.pathname) {
    window.ga && ga('send', 'pageview', path)

    window.gtag && gtag('event', 'page_view', path)

    window.gtag && gtag('config', GA_TRACKING_ID, {
        page_path: path
    })

    if (window.gtag && !window.GA_TRACKING_ID) {
        console.error('global var `GA_TRACKING_ID` is not defined')
    }

    window.yaCounterInstance && yaCounterInstance.hit(path)

    window.top100Counter && top100Counter.trackPageview(path)
}

export function templateTrim(templateHtml: string) {
    return templateHtml.replace(/\/{2,}<!\[CDATA\[([\s\S]*)\/{2,}]]>/i, '$1').trim()
}

export function nodeOffset(node: HTMLElement): {top: number, left: number} {
    let offsetTop = 0,
        offsetLeft = 0,
        offsetParent = node;

    while (offsetParent) {
        offsetTop += offsetParent.offsetTop
        offsetLeft += offsetParent.offsetLeft

        offsetParent = <HTMLElement> offsetParent.offsetParent
    }

    return {top: offsetTop, left: offsetLeft}
}

export function nodeOffsetTop(node: HTMLElement) {
    return nodeOffset(node).top
}

export function closestNode(node: HTMLElement, classNameOrNode) {
    let classNameRegexp,
        targetNode
    
    if (classNameOrNode instanceof HTMLElement) {
        targetNode = classNameOrNode
    }
    else {
        classNameOrNode = classNameOrNode.replace(/^\.+/, '')
    }

    while (node) {
        if (targetNode) {
            if (targetNode === node) {
                return node
            }
        }
        else if (node.classList.contains(classNameOrNode)) {
            return node
        }

        node = <HTMLElement> node.parentNode
    }
}

/**
 * Converts HTML Attr to boolean
 */
export function toBoolean(string: string | boolean | null | undefined) : boolean {
    if (typeof string === 'boolean') {
        return string
    }
    else if (string === null || string === undefined) {
        return false
    }

    string = String(string).toLowerCase()

    switch (string) {
        case '0':
        case false.toString():
            return false

        case true.toString():
            return true

        default:
            return true
    }
}

export function getBgImageUrl($el) {
    const el = $el instanceof HTMLElement ? $el : (window['jQuery'] && $el instanceof window['jQuery'] && $el.get(0))

    if (!el) {
        return ''
    }

    const backgroundImage = getComputedStyle(el).backgroundImage

    if (!backgroundImage || backgroundImage === 'none') {
        return ''
    }

    return backgroundImage.replace(/url\(['"]?/,'').replace(/['"]?\)/, '')
}

interface LoadSvgIconsInterface {
    (el: HTMLElement): void
    shouldUseFallback?: () => boolean
}

const loadSvgIcons: LoadSvgIconsInterface = function loadSvgIcons(el: HTMLElement): void {
    Array.prototype.forEach.call(el.querySelectorAll('svg use'), function (svgUseNode) {
        const context = this || window

        const hrefAttributes = ['xlink:href', 'href']

        let hrefAttribute, href

        hrefAttributes.some(function (attribute) {
            href = svgUseNode.getAttribute(attribute)

            hrefAttribute = attribute

            return href
        })

        if (!href) {
            return
        }

        let hrefParams = href.match(/^([\s\S]+)(#[\s\S]*)$/)

        if (!hrefParams) {
            return
        }

        let [, hrefUrl, hrefId] = hrefParams

        svgUseNode.setAttribute(hrefAttribute, hrefId)

        context._loadedSvgUrls = context._loadedSvgUrls || []

        if (context._loadedSvgUrls.indexOf(hrefUrl) !== -1) {
            return
        }

        context._loadedSvgUrls.push(hrefUrl)

        const request = new XMLHttpRequest()

        request.onload = function (xhr) {
            if (/xml/.test(request.getResponseHeader('Content-Type'))) {
                document.body.insertAdjacentHTML('beforeend', request.response)
            }
        }

        request.open('get', hrefUrl, true)
        request.send()
    }, this)
}

loadSvgIcons.shouldUseFallback = function () {
    return /MSIE|Trident/.test(navigator.userAgent)
}

export {loadSvgIcons}

export function getAppOption(property: keyof AppConfig): any {
    return (window.appConfig && appConfig.hasOwnProperty(property)) ? appConfig[property] : undefined
}