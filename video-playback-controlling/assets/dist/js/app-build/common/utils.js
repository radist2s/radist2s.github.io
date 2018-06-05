System.register([], function (exports_1, context_1) {
    "use strict";
    var loadSvgIcons;
    var __moduleName = context_1 && context_1.id;
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    exports_1("escapeRegExp", escapeRegExp);
    function userTrailingslashit(path) {
        return path.trimSlash(false, true) + window.appURLs.userTrailingslashit;
    }
    exports_1("userTrailingslashit", userTrailingslashit);
    /**
     * @param {Function} callback Callback function of jQuery Deferred
     * @param [args]
     */
    function runCallback(callback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!callback) {
            return;
        }
        if (callback instanceof Function) {
            return callback.apply(this, args);
        }
    }
    exports_1("runCallback", runCallback);
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    exports_1("capitalize", capitalize);
    function onDomReady(documentReadyCallback) {
        var readyReg = /complete|loaded|interactive/;
        function domLoaded() {
            document.removeEventListener('DOMContentLoaded', domLoaded, false);
            documentReadyCallback();
        }
        if (readyReg.test(document.readyState) && document.body) {
            domLoaded();
        }
        else {
            document.addEventListener('DOMContentLoaded', domLoaded, false);
        }
    }
    exports_1("onDomReady", onDomReady);
    function gaTrackEvent(cat, act, desc, yaVisitParams) {
        var _a, _b, _c;
        window._gaq && _gaq.push(['_trackEvent', cat, act, desc]);
        window.ga && ga('send', 'event', cat, String(act), desc);
        if (!yaVisitParams) {
            if (desc) {
                yaVisitParams = (_a = {},
                    _a[cat] = (_b = {}, _b[act] = desc, _b),
                    _a);
            }
            else {
                yaVisitParams = (_c = {},
                    _c[cat] = act,
                    _c);
            }
        }
        window.yaCounterInstance && yaCounterInstance.params(yaVisitParams);
        window.top100Counter && top100Counter.sendCustomVars(yaVisitParams);
        if (window.gtag) {
            var actionParams = void 0;
            if (typeof act === 'number' || typeof act === 'string' || act instanceof String) {
                actionParams = {
                    event_category: String(cat),
                    event_action: String(act)
                };
                if (desc) {
                    actionParams.event_label = String(desc);
                }
            }
            else {
                actionParams = act;
                cat = cat || actionParams.event_category;
            }
            gtag('event', cat, actionParams);
        }
    }
    exports_1("gaTrackEvent", gaTrackEvent);
    function gaTrackPageView(path) {
        if (path === void 0) { path = location.pathname; }
        window.ga && ga('send', 'pageview', path);
        window.gtag && gtag('event', 'page_view', path);
        window.gtag && gtag('config', GA_TRACKING_ID, {
            page_path: path
        });
        if (window.gtag && !window.GA_TRACKING_ID) {
            console.error('global var `GA_TRACKING_ID` is not defined');
        }
        window.yaCounterInstance && yaCounterInstance.hit(path);
        window.top100Counter && top100Counter.trackPageview(path);
    }
    exports_1("gaTrackPageView", gaTrackPageView);
    function templateTrim(templateHtml) {
        return templateHtml.replace(/\/{2,}<!\[CDATA\[([\s\S]*)\/{2,}]]>/i, '$1').trim();
    }
    exports_1("templateTrim", templateTrim);
    function nodeOffset(node) {
        var offsetTop = 0, offsetLeft = 0, offsetParent = node;
        while (offsetParent) {
            offsetTop += offsetParent.offsetTop;
            offsetLeft += offsetParent.offsetLeft;
            offsetParent = offsetParent.offsetParent;
        }
        return { top: offsetTop, left: offsetLeft };
    }
    exports_1("nodeOffset", nodeOffset);
    function nodeOffsetTop(node) {
        return nodeOffset(node).top;
    }
    exports_1("nodeOffsetTop", nodeOffsetTop);
    function closestNode(node, classNameOrNode) {
        var classNameRegexp, targetNode;
        if (classNameOrNode instanceof HTMLElement) {
            targetNode = classNameOrNode;
        }
        else {
            classNameOrNode = classNameOrNode.replace(/^\.+/, '');
        }
        while (node) {
            if (targetNode) {
                if (targetNode === node) {
                    return node;
                }
            }
            else if (node.classList.contains(classNameOrNode)) {
                return node;
            }
            node = node.parentNode;
        }
    }
    exports_1("closestNode", closestNode);
    /**
     * Converts HTML Attr to boolean
     */
    function toBoolean(string) {
        if (typeof string === 'boolean') {
            return string;
        }
        else if (string === null || string === undefined) {
            return false;
        }
        string = String(string).toLowerCase();
        switch (string) {
            case '0':
            case false.toString():
                return false;
            case true.toString():
                return true;
            default:
                return true;
        }
    }
    exports_1("toBoolean", toBoolean);
    function getBgImageUrl($el) {
        var el = $el instanceof HTMLElement ? $el : (window['jQuery'] && $el instanceof window['jQuery'] && $el.get(0));
        if (!el) {
            return '';
        }
        var backgroundImage = getComputedStyle(el).backgroundImage;
        if (!backgroundImage || backgroundImage === 'none') {
            return '';
        }
        return backgroundImage.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
    }
    exports_1("getBgImageUrl", getBgImageUrl);
    function getAppOption(property) {
        return (window.appConfig && appConfig.hasOwnProperty(property)) ? appConfig[property] : undefined;
    }
    exports_1("getAppOption", getAppOption);
    return {
        setters: [],
        execute: function () {
            if (!String.prototype.trim) {
                String.prototype.trim = function trim() {
                    return this.replace(/^\s+|\s+$/g, '');
                };
            }
            /**
             * @param {boolean} [leftTrim]
             * @param {boolean} [rightTrim]
             * @returns {string}
             */
            String.prototype.trimSlash = function trimSlash(leftTrim, rightTrim) {
                var trimmerPatterns = [];
                if (leftTrim === undefined || leftTrim) {
                    trimmerPatterns.push('^\/+');
                }
                if (rightTrim === undefined || rightTrim) {
                    trimmerPatterns.push('\/+$');
                }
                var trimmer = new RegExp(trimmerPatterns.join('|'), 'g');
                return this.replace(trimmer, '');
            };
            String.prototype.getUrlPath = function getUrlPath(url, keepQuery) {
                keepQuery = (keepQuery === undefined && !!url) || keepQuery;
                url = (typeof url !== 'boolean' && url !== undefined && String(url)) || this;
                var filters = [];
                filters.push(escapeRegExp(window.appURLs.homeUrl));
                if (typeof keepQuery === 'boolean' && !keepQuery) {
                    filters.push('\\?.+');
                }
                return url.replace(new RegExp(filters.join('|'), 'ig'), '').replace(/#.*/g, '').trimSlash(false, true);
            };
            /**
             * @param {string|string[]}[uri]
             * @returns {string}
             */
            String.prototype.createUrl = function createUrl(uri) {
                if (uri instanceof Array) {
                    /** @var {Array} uri */
                    uri = uri.join('/');
                }
                uri = uri ? String(uri) : '';
                var site_url_base = window.appURLs.homeUrl.trimSlash(false, true);
                var url_path = this.trimSlash() + (uri ? '/' + uri.trimSlash() : '');
                return site_url_base + '/' + url_path.trimSlash();
            };
            onDomReady(function () {
                function onGaLinkClick(e) {
                    if (e.type === 'mouseup' && e.which !== 2) {
                        return;
                    }
                    var node = e.target;
                    var deep = 3;
                    while (deep-- && node && !node.hasAttribute('data-ga')) {
                        node = node.parentElement;
                    }
                    var gaCategory = node && node.getAttribute('data-ga');
                    if (!gaCategory) {
                        return;
                    }
                    var gaAction = node.getAttribute('data-ga-action');
                    if (!gaAction) {
                        return;
                    }
                    var gaCategories = gaCategory.split('|'), gaActions = gaAction.split('|'), gaDescription = node.getAttribute('data-ga-desc') || node.getAttribute('data-ga-description') || '';
                    gaCategories.forEach(function (cat) {
                        gaActions.forEach(function (act) {
                            //_gaq.push(['_trackEvent', cat, act, description])
                            // window.ga && ga('send', 'event', cat, act, gaDescription)
                            gaTrackEvent(cat, act, gaDescription);
                        });
                    });
                }
                document.addEventListener('click', onGaLinkClick);
                document.addEventListener('mouseup', onGaLinkClick);
            });
            loadSvgIcons = function loadSvgIcons(el) {
                Array.prototype.forEach.call(el.querySelectorAll('svg use'), function (svgUseNode) {
                    var context = this || window;
                    var hrefAttributes = ['xlink:href', 'href'];
                    var hrefAttribute, href;
                    hrefAttributes.some(function (attribute) {
                        href = svgUseNode.getAttribute(attribute);
                        hrefAttribute = attribute;
                        return href;
                    });
                    if (!href) {
                        return;
                    }
                    var hrefParams = href.match(/^([\s\S]+)(#[\s\S]*)$/);
                    if (!hrefParams) {
                        return;
                    }
                    var hrefUrl = hrefParams[1], hrefId = hrefParams[2];
                    svgUseNode.setAttribute(hrefAttribute, hrefId);
                    context._loadedSvgUrls = context._loadedSvgUrls || [];
                    if (context._loadedSvgUrls.indexOf(hrefUrl) !== -1) {
                        return;
                    }
                    context._loadedSvgUrls.push(hrefUrl);
                    var request = new XMLHttpRequest();
                    request.onload = function (xhr) {
                        if (/xml/.test(request.getResponseHeader('Content-Type'))) {
                            document.body.insertAdjacentHTML('beforeend', request.response);
                        }
                    };
                    request.open('get', hrefUrl, true);
                    request.send();
                }, this);
            };
            exports_1("loadSvgIcons", loadSvgIcons);
            loadSvgIcons.shouldUseFallback = function () {
                return /MSIE|Trident/.test(navigator.userAgent);
            };
        }
    };
});
//# sourceMappingURL=utils.js.map
