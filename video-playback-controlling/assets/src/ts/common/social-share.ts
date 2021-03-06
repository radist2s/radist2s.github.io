import * as _ from 'lodash'

const ogAttrRegex = /%(og:[\S]+)%/g;

interface ShareLinksOptions {
    callbackAfter?: (link?: HTMLElement) => void
    callbackBefore?: (link?: HTMLElement) => void
    linkComponentFilter?: (link?: HTMLElement, ogProperty?: string) => void
}

const methods = {
    init: function (options: ShareLinksOptions) {
        if (this.hasAttribute('social-attached')) {
            return
        }

        this.setAttribute('social-attached', true)

        const settings: ShareLinksOptions = {
            callbackAfter: function ($this) {
            },
            callbackBefore: null,
            linkComponentFilter: null
        };

        _.extend(settings, options)

        return this.addEventListener('click', methods.onLinkClick.bind(this, settings))
    },
    onLinkClick: function (settings: ShareLinksOptions, e) {
        let linkNode;
        const rootNode = this;
        let socialNetwork;

        while (!socialNetwork) {
            linkNode = linkNode ? linkNode.parentNode : e.target

            if (!linkNode || rootNode === linkNode) {
                return
            }

            socialNetwork = linkNode.getAttribute('data-network')
        }

        e.preventDefault()

        if (!linkNode.getAttribute('query-data-replaced')) {
            methods.replaceLinkData(linkNode, settings)
            linkNode.getAttribute('query-data-replaced', true)
        }

        const width = 650,
            height = 450,
            left = Math.floor(screen.width / 2 - width / 2),
            top = Math.floor(screen.height / 2 - height / 2);

        const windowParams = 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top
            + ',toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no';

        const url = linkNode.href || decodeURI(linkNode.getAttribute('data-href')),
            title = linkNode.title;

        const popup = window.open(url, title, windowParams);

        try {
            popup.document.title = title
        }
        catch (e) {
        }

        settings.callbackAfter(linkNode)

        window.ga && ga('send', 'event', 'SocialShareRequest', socialNetwork)
    },

    replaceLinkData: function (linkNode, settings: ShareLinksOptions) {
        if (settings.callbackBefore instanceof Function) {
            settings.callbackBefore(linkNode)
        }

        const query = linkNode.search || '';

        const queryVars = {};

        query.substr(1).split('&').forEach(function (item) {
            const itemParts = item.split('=');
            queryVars[itemParts[0]] = itemParts[1]
        })

        Object.keys(queryVars).forEach(function (attr) {
            let val;

            try {
                val = decodeURIComponent(queryVars[attr])
            }
            catch (e) {
                val = queryVars[attr]
            }

            if (ogAttrRegex.test(val)) {
                val = val.replace(ogAttrRegex, function (match, ogProp) {
                    if (settings.linkComponentFilter instanceof Function) {
                        const linkComponent = settings.linkComponentFilter(linkNode, ogProp);

                        if (linkComponent !== undefined && linkComponent !== null) {
                            return linkComponent
                        }
                    }

                    const meta = document.head.querySelector(`meta[property="${ogProp}"]`);

                    return meta ? meta.getAttribute('content') : ''
                })
            }

            queryVars[attr] = encodeURIComponent(val)
        })

        linkNode.search = ''

        let linkHref = linkNode.href.replace(/\?$/, '');

        linkHref += '?' + (function () {
            const query = [];

            for (let prop in queryVars) {
                if (!queryVars.hasOwnProperty(prop)) {
                    continue
                }

                const value = queryVars[prop];

                query.push(encodeURIComponent(prop) + '=' + value)
            }

            return query.join('&')
        })()

        linkNode.href = linkHref

        return linkHref
    }
};

const $ = window['jQuery'] || window['Zepto'];

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
    }
}

export default function socialShare(rootElements: HTMLElement | HTMLElement[] | NodeList, options?: ShareLinksOptions) {
    if (!rootElements || (rootElements instanceof Array && rootElements.length === 0)) {
        return
    }

    if (rootElements instanceof HTMLElement) {
        rootElements = [rootElements]
    }

    Array.prototype.forEach.call(rootElements, function (node: HTMLElement) {
        methods.init.call(node, options)
    })
}