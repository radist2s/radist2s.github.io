/**
 * Usage:
 *
 this.once('hasLayout', function () {
        var screenBgImageNode = this.el.querySelector('.screenBgImage')

        this.bgObjectFit = new ObjectFit(screenBgImageNode)

        this.bgObjectFit.ready(this.bgObjectFit.fit.bind(this))
    })

 this.listenTo(this.model, 'change:viewSize', function () {
        if (!this.bgObjectFit) {
            return
        }

        this.bgObjectFit.ready(this.bgObjectFit.fit.bind(this))
    })
 */
import {Promise} from 'es6-promise'

declare interface ObjectFitHTMLElement extends HTMLElement {
    width: number
    height: number
}

function isAlreadyLoaded(node) {
    if (node.tagName.toLocaleLowerCase() === 'svg') {
        return true
    }

    if (node.complete !== undefined && !node.complete) {
        return false
    }

    if (node.readyState !== undefined) {
        return node.readyState > node.HAVE_NOTHING
    }

    return !!node.naturalWidth
}

class ObjectFit {
    node: HTMLElement | HTMLVideoElement

    protected isImg: boolean
    protected isDiv: boolean
    protected isIframe: boolean
    protected isSvg: boolean
    protected objectFitNode: HTMLElement
    protected loadedPromise: Promise<Function>
    protected nodeWidth: number
    protected nodeHeight: number
    protected nodeAspectRatio: number
    public fit: () => void
    public className: string
    
    static objectFitSupported

    static nativeSupport() {
        if (ObjectFit.objectFitSupported !== undefined) {
            return ObjectFit.objectFitSupported
        }

        const detector = document.createElement('div');
        const styleProps = ['-o-object-fit', 'object-fit'];

        return ObjectFit.objectFitSupported = styleProps.some(function (prop) {
            return detector.style[prop] !== undefined
        })
    }

    constructor(node, objectFitNode?: HTMLElement) {
        this.node = node

        if (node === undefined || !(node instanceof HTMLElement || node instanceof SVGElement)) {
            throw new Error('Only Nodes allowed')
        }

        switch (node.tagName.toLowerCase()) {
            case 'img':
            // case 'picture':
                this.isImg = true
                break
            case 'video':
                this.isImg = false
                break
            case 'svg':
                this.isSvg = true;
                break;
            case 'iframe':
                this.isIframe = true
                break;
            case 'div':
                this.isDiv = true
                break;
            default:
                throw new Error('Only images or Video allowed')
        }

        this.render(objectFitNode)

        this.loadedPromise = new Promise(done => {
            if (this.isIframe || this.isSvg || this.isDiv) {
                return done()
            }

            if (isAlreadyLoaded(this.node)) {
                return done()
            }

            const loadedEvent = this.isImg ? 'load' : 'loadedmetadata'
            let onLoadCallback

            this.node.addEventListener(loadedEvent, onLoadCallback = () => {
                this.node.removeEventListener(loadedEvent, onLoadCallback)

                done()
            })
        })

        this.loadedPromise.then(this.initSizes.bind(this))

        this.fit = this.loadedPromise.then.bind(this.loadedPromise, this._fit.bind(this))
    }

    protected render(objectFitNode: HTMLElement | null) {
        this.objectFitNode = objectFitNode
        
        if (this.objectFitNode && this.objectFitNode instanceof HTMLElement) {
            this.objectFitNode = objectFitNode
        }
        else {
            this.objectFitNode = document.createElement('object-fit')
        }
        
        objectFitNode.className = this.className
        objectFitNode.style.display = 'block'
        objectFitNode.style.overflow = 'hidden'

        if (!objectFitNode.parentNode) {
            objectFitNode.appendChild(this.node.parentNode.replaceChild(objectFitNode, this.node))
        }
    }

    initSizes() {
        const node = this.node
        
        let nodeComputedWidth,
            nodeComputedHeight,
            computedStyles;

        if (this.isSvg) {
            computedStyles = getComputedStyle(node)

            nodeComputedWidth = parseInt(computedStyles.width)
            nodeComputedHeight = parseInt(computedStyles.height)

            nodeComputedWidth = isFinite(nodeComputedWidth) ? nodeComputedWidth : 0
            nodeComputedHeight = isFinite(nodeComputedHeight) ? nodeComputedHeight : 0

            this.nodeWidth = nodeComputedWidth
            this.nodeHeight = nodeComputedHeight
        }

        if (this.isDiv) {
            computedStyles = getComputedStyle(node)

            nodeComputedWidth = parseInt(computedStyles.width)
            nodeComputedHeight = parseInt(computedStyles.height)

            nodeComputedWidth = isFinite(nodeComputedWidth) ? nodeComputedWidth : 0
            nodeComputedHeight = isFinite(nodeComputedHeight) ? nodeComputedHeight : 0

            this.nodeWidth = nodeComputedWidth
            this.nodeHeight = nodeComputedHeight
        }
        
        if (node instanceof HTMLVideoElement) {
            this.nodeWidth = node.videoWidth || node.width || 0
            this.nodeHeight = node.videoHeight || node.height || 0
        }
        else if (node instanceof HTMLImageElement) {
            this.nodeWidth = node.naturalWidth || node.width || 0
            this.nodeHeight = node.naturalHeight || node.width || 0
        }
        else {
            let nodeWidth = node.getAttribute('width'),
                nodeHeight = node.getAttribute('height')

            this.nodeWidth = this.nodeWidth || (nodeWidth && parseInt(nodeWidth)) || 0
            this.nodeHeight = this.nodeHeight || (nodeHeight && parseInt(nodeHeight)) || 0
        }
        
        this.nodeAspectRatio = this.nodeWidth / this.nodeHeight
    }

    public ready(callback) {
        this.loadedPromise.then(callback.bind(this))

        return this
    }

    protected _fit() {
        const sourceAspectRatio = this.nodeAspectRatio,
            desiredWidth = this.objectFitNode.clientWidth,
            desiredHeight = this.objectFitNode.clientHeight;

        let desiredCropHeight = 0,
            desiredCropWidth = 0;
        const desiredAspectRatio = desiredWidth / desiredHeight;

        if (sourceAspectRatio > desiredAspectRatio) {
            desiredCropWidth = Math.floor(desiredHeight * sourceAspectRatio)
            desiredCropHeight = desiredHeight
        }
        else {
            desiredCropWidth = desiredWidth
            desiredCropHeight = Math.floor(desiredWidth / sourceAspectRatio)
        }

        if (!isFinite(desiredCropWidth) || !isFinite(desiredCropHeight)) {
            return
        }

        const node = this.node
        
        let cropOffsetLeft = Math.floor((desiredCropWidth - desiredWidth) / 2),
            cropOffsetTop = Math.floor((desiredCropHeight - desiredHeight) / 2)

        node.style.width = desiredCropWidth + 'px'
        node.style.height = desiredCropHeight + 'px'
        node.style.left = -cropOffsetLeft + 'px'
        node.style.top = -cropOffsetTop + 'px'
    }
}

ObjectFit.prototype.className = 'object-fit'

export default ObjectFit