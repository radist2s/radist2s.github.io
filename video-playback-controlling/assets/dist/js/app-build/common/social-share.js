System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var _, ogAttrRegex, methods, $;
    var __moduleName = context_1 && context_1.id;
    function socialShare(rootElements, options) {
        if (!rootElements || (rootElements instanceof Array && rootElements.length === 0)) {
            return;
        }
        if (rootElements instanceof HTMLElement) {
            rootElements = [rootElements];
        }
        Array.prototype.forEach.call(rootElements, function (node) {
            methods.init.call(node, options);
        });
    }
    exports_1("default", socialShare);
    return {
        setters: [
            function (_1) {
                _ = _1;
            }
        ],
        execute: function () {
            ogAttrRegex = /%(og:[\S]+)%/g;
            methods = {
                init: function (options) {
                    if (this.hasAttribute('social-attached')) {
                        return;
                    }
                    this.setAttribute('social-attached', true);
                    var settings = {
                        callbackAfter: function ($this) {
                        },
                        callbackBefore: null,
                        linkComponentFilter: null
                    };
                    _.extend(settings, options);
                    return this.addEventListener('click', methods.onLinkClick.bind(this, settings));
                },
                onLinkClick: function (settings, e) {
                    var linkNode;
                    var rootNode = this;
                    var socialNetwork;
                    while (!socialNetwork) {
                        linkNode = linkNode ? linkNode.parentNode : e.target;
                        if (!linkNode || rootNode === linkNode) {
                            return;
                        }
                        socialNetwork = linkNode.getAttribute('data-network');
                    }
                    e.preventDefault();
                    if (!linkNode.getAttribute('query-data-replaced')) {
                        methods.replaceLinkData(linkNode, settings);
                        linkNode.getAttribute('query-data-replaced', true);
                    }
                    var width = 650, height = 450, left = Math.floor(screen.width / 2 - width / 2), top = Math.floor(screen.height / 2 - height / 2);
                    var windowParams = 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top
                        + ',toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no';
                    var url = linkNode.href || decodeURI(linkNode.getAttribute('data-href')), title = linkNode.title;
                    var popup = window.open(url, title, windowParams);
                    try {
                        popup.document.title = title;
                    }
                    catch (e) {
                    }
                    settings.callbackAfter(linkNode);
                    window.ga && ga('send', 'event', 'SocialShareRequest', socialNetwork);
                },
                replaceLinkData: function (linkNode, settings) {
                    if (settings.callbackBefore instanceof Function) {
                        settings.callbackBefore(linkNode);
                    }
                    var query = linkNode.search || '';
                    var queryVars = {};
                    query.substr(1).split('&').forEach(function (item) {
                        var itemParts = item.split('=');
                        queryVars[itemParts[0]] = itemParts[1];
                    });
                    Object.keys(queryVars).forEach(function (attr) {
                        var val;
                        try {
                            val = decodeURIComponent(queryVars[attr]);
                        }
                        catch (e) {
                            val = queryVars[attr];
                        }
                        if (ogAttrRegex.test(val)) {
                            val = val.replace(ogAttrRegex, function (match, ogProp) {
                                if (settings.linkComponentFilter instanceof Function) {
                                    var linkComponent = settings.linkComponentFilter(linkNode, ogProp);
                                    if (linkComponent !== undefined && linkComponent !== null) {
                                        return linkComponent;
                                    }
                                }
                                var meta = document.head.querySelector("meta[property=\"" + ogProp + "\"]");
                                return meta ? meta.getAttribute('content') : '';
                            });
                        }
                        queryVars[attr] = encodeURIComponent(val);
                    });
                    linkNode.search = '';
                    var linkHref = linkNode.href.replace(/\?$/, '');
                    linkHref += '?' + (function () {
                        var query = [];
                        for (var prop in queryVars) {
                            if (!queryVars.hasOwnProperty(prop)) {
                                continue;
                            }
                            var value = queryVars[prop];
                            query.push(encodeURIComponent(prop) + '=' + value);
                        }
                        return query.join('&');
                    })();
                    linkNode.href = linkHref;
                    return linkHref;
                }
            };
            $ = window['jQuery'] || window['Zepto'];
            if ($) {
                $.fn.socialShare = function (method) {
                    if (methods[method]) {
                        return methods[method].apply(this.get(0), Array.prototype.slice.call(arguments, 1));
                    }
                    else if (typeof method === 'object' || !method) {
                        return methods.init.apply(this.get(0), arguments);
                    }
                    else {
                        $.error('Method ' + method + ' does not exist on jQuery.dateMiniChartControl');
                    }
                };
            }
        }
    };
});
//# sourceMappingURL=social-share.js.map
