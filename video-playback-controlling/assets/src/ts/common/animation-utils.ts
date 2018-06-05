import {rafPolyfill} from './request-animation-frame'
import {runCallback} from './utils'

rafPolyfill()

let transitionEventName;

export function getTransitionEndEventName() {
    if (transitionEventName !== undefined) {
        return transitionEventName
    }

    let detectedTransition;
    const el = document.createElement('transitiondetector'),
        transitions = {
            'transition': 'transitionend',
            // see also http://ianlunn.co.uk/articles/opera-12-otransitionend-bugs-and-workarounds/
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'webkitTransition': 'webkitTransitionEnd'
        };

    Object.keys(transitions).some(function (transition) {
        if (el.style[transition] !== undefined) {
            detectedTransition = transitions[transition]

            return true
        }

        return false
    })

    if (!detectedTransition) {
        detectedTransition = false
    }

    return (transitionEventName = detectedTransition)
}

let transformStylePropertyName;

export function getTransformStyleProperty(append = ''): string {
    if (transformStylePropertyName !== undefined) {
        return transformStylePropertyName + append
    }

    let detectedTransform;
    const el = document.createElement('transformdetector'),
        transforms = [
            'transform',
            'OTransform',
            'msTransform',
            'MozTransform',
            'webkitTransform'
        ];

    transforms.some && transforms.some(function (transform) {
        if (el.style[transform] !== undefined) {
            detectedTransform = transform

            return true
        }
    })

    if (!detectedTransform) {
        detectedTransform = ''
    }

    return (transformStylePropertyName = detectedTransform) + append
}

interface transitionStyleProperties {
    [key: string]: string
}

let transitionStyleProperties: transitionStyleProperties = {}

export function getTransitionStyleProperty(property?: string): string {
    property = property || 'transition'

    if (transitionStyleProperties[property] !== undefined) {
        return transitionStyleProperties[property]
    }

    if (transitionStyleProperties.prefix === undefined) {
        let transformStyleProperty = getTransformStyleProperty();

        if (!transformStyleProperty) {
            return transitionStyleProperties[property] = ''
        }

        transitionStyleProperties.prefix = transformStyleProperty.replace(/transform/i, '')
    }

    const prefix = transitionStyleProperties.prefix;

    const propertyPrefixed = !prefix ? property : prefix + property.charAt(0).toUpperCase() + property.slice(1); // prefix + capitalized

    return transitionStyleProperties[property] = propertyPrefixed
}

let isTransformSupport3dSupported;

export function transformSupport3d() {
    if (isTransformSupport3dSupported !== undefined) {
        return isTransformSupport3dSupported
    }

    let transform = getTransformStyleProperty();

    if (!transform) {
        return (isTransformSupport3dSupported = false)
    }

    const el = document.createElement('transformdetector');
    const defaultTransformData = el[transform];
    el[transform] = 'translateZ(0)'

    if (!el[transform] || el[transform] == defaultTransformData) {
        return (isTransformSupport3dSupported = false)
    }
    else {
        return (isTransformSupport3dSupported = true)
    }
}

export namespace fade {
    const finishTransitionEvent = 'finishTransition'
    const cancelTransitionEvent = 'cancelTransition'

    const dataInitialOpacityAttr = 'data-initial-opacity'
    const displayAsAttr = 'data-display-as'

    export function toggle(el: HTMLElement, show: boolean, callback?, layoutChangedCallback?, displayAs: string = 'block') {
        cancel(el)

        let animationEndCallback,
            removeListeners,
            transitionEnd = getTransitionEndEventName();

        animationEndCallback = function (e) {
            if (e && e.type !== finishTransitionEvent && (e.target !== el || e.propertyName !== 'opacity')) {
                return
            }

            removeListeners()

            if (!show) {
                el.style.display = 'none'
                el.style.opacity = ''
            }

            runCallback(callback)
        }

        removeListeners = function () {
            el.removeEventListener(transitionEnd, animationEndCallback)
            el.removeEventListener(finishTransitionEvent, animationEndCallback)
            el.removeEventListener(cancelTransitionEvent, removeListeners)
        }

        el.addEventListener(transitionEnd, animationEndCallback)
        el.addEventListener(finishTransitionEvent, animationEndCallback)
        el.addEventListener(cancelTransitionEvent, removeListeners)

        let nextOpacity: number;

        const elComputedStyle = getComputedStyle(el);

        if (show) {
            nextOpacity = el.hasAttribute(dataInitialOpacityAttr) ? parseFloat(el.getAttribute(dataInitialOpacityAttr)) : 1

            if (elComputedStyle.display === 'none') {
                el.style.opacity = String(0)
                el.style.display = ''

                if (getComputedStyle(el).display === 'none') {
                    el.style.display = el.getAttribute(displayAsAttr) || displayAs
                }
            }
            else {
                if (parseFloat(el.style.opacity) === 0) {
                    el.style.opacity = String(nextOpacity)
                }

                runCallback(layoutChangedCallback)

                return animationEndCallback()
            }
        }
        else if (!show) {
            if (el.style.display === 'none' || parseFloat(elComputedStyle.opacity) === 0 || (!el.clientHeight && !el.clientWidth)) {
                return animationEndCallback()
            }

            if (!el.hasAttribute(dataInitialOpacityAttr)) {
                el.setAttribute(dataInitialOpacityAttr, elComputedStyle.opacity)
            }

            nextOpacity = 0
        }

        requestAnimationFrame(function () {
            runCallback(layoutChangedCallback)
            el.style.opacity = String(nextOpacity)
        })

        let transitionDuration = getComputedStyle(el)[getTransitionStyleProperty('transitionDuration')];

        if (!transitionEnd || !transitionDuration || !parseFloat(transitionDuration)) {
            animationEndCallback()
        }
    }

    export function finish(node: HTMLElement, callback?: Function, layoutChangedCallback?: Function) {
        if (node.clientWidth && node.clientHeight) {
            return
        }

        const finishTransition = document.createEvent('Event');

        finishTransition.initEvent(finishTransitionEvent, true, true)

        node.dispatchEvent(finishTransition)

        runCallback(layoutChangedCallback)
        runCallback(callback)
    }

    export function cancel(node: HTMLElement) {
        const finishTransition = document.createEvent('Event');

        finishTransition.initEvent(cancelTransitionEvent, true, true)

        node.dispatchEvent(finishTransition)
    }
}

export class RafAnimationQueue {
    private context: any
    private queue: Array<Function>
    private queueInProgress: boolean

    constructor(context?: any) {
        this.context = context || undefined

        this.clear()
    }

    add(callback: Function, context?: any) {
        if (callback instanceof Function) {
            this.queue.push(callback.bind(context || this.context))

            this.runQueue()
        }

        return this
    }

    delay() {
        this.queue.push(null)

        this.runQueue()

        return this
    }

    runQueue() {
        if (this.queueInProgress) {
            return
        }

        this.queueInProgress = true

        requestAnimationFrame(this.queueLoop.bind(this))
    }

    queueLoop() {
        const callback = this.queue.shift();

        callback instanceof Function && callback()

        if (!this.queue.length) {
            this.queueInProgress = false
        }
        else {
            requestAnimationFrame(this.queueLoop.bind(this))
        }
    }

    clear() {
        this.queue = []
    }
}