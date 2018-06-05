System.register(["es6-promise"], function (exports_1, context_1) {
    "use strict";
    var es6_promise_1, ObjectFit;
    var __moduleName = context_1 && context_1.id;
    function isAlreadyLoaded(node) {
        if (node.tagName.toLocaleLowerCase() === 'svg') {
            return true;
        }
        if (node.complete !== undefined && !node.complete) {
            return false;
        }
        if (node.readyState !== undefined) {
            return node.readyState > node.HAVE_NOTHING;
        }
        return !!node.naturalWidth;
    }
    return {
        setters: [
            function (es6_promise_1_1) {
                es6_promise_1 = es6_promise_1_1;
            }
        ],
        execute: function () {
            ObjectFit = /** @class */ (function () {
                function ObjectFit(node, objectFitNode) {
                    var _this = this;
                    this.node = node;
                    if (node === undefined || !(node instanceof HTMLElement || node instanceof SVGElement)) {
                        throw new Error('Only Nodes allowed');
                    }
                    switch (node.tagName.toLowerCase()) {
                        case 'img':
                            // case 'picture':
                            this.isImg = true;
                            break;
                        case 'video':
                            this.isImg = false;
                            break;
                        case 'svg':
                            this.isSvg = true;
                            break;
                        case 'iframe':
                            this.isIframe = true;
                            break;
                        case 'div':
                            this.isDiv = true;
                            break;
                        default:
                            throw new Error('Only images or Video allowed');
                    }
                    this.render(objectFitNode);
                    this.loadedPromise = new es6_promise_1.Promise(function (done) {
                        if (_this.isIframe || _this.isSvg || _this.isDiv) {
                            return done();
                        }
                        if (isAlreadyLoaded(_this.node)) {
                            return done();
                        }
                        var loadedEvent = _this.isImg ? 'load' : 'loadedmetadata';
                        var onLoadCallback;
                        _this.node.addEventListener(loadedEvent, onLoadCallback = function () {
                            _this.node.removeEventListener(loadedEvent, onLoadCallback);
                            done();
                        });
                    });
                    this.loadedPromise.then(this.initSizes.bind(this));
                    this.fit = this.loadedPromise.then.bind(this.loadedPromise, this._fit.bind(this));
                }
                ObjectFit.nativeSupport = function () {
                    if (ObjectFit.objectFitSupported !== undefined) {
                        return ObjectFit.objectFitSupported;
                    }
                    var detector = document.createElement('div');
                    var styleProps = ['-o-object-fit', 'object-fit'];
                    return ObjectFit.objectFitSupported = styleProps.some(function (prop) {
                        return detector.style[prop] !== undefined;
                    });
                };
                ObjectFit.prototype.render = function (objectFitNode) {
                    this.objectFitNode = objectFitNode;
                    if (this.objectFitNode && this.objectFitNode instanceof HTMLElement) {
                        this.objectFitNode = objectFitNode;
                    }
                    else {
                        this.objectFitNode = document.createElement('object-fit');
                    }
                    objectFitNode.className = this.className;
                    objectFitNode.style.display = 'block';
                    objectFitNode.style.overflow = 'hidden';
                    if (!objectFitNode.parentNode) {
                        objectFitNode.appendChild(this.node.parentNode.replaceChild(objectFitNode, this.node));
                    }
                };
                ObjectFit.prototype.initSizes = function () {
                    var node = this.node;
                    var nodeComputedWidth, nodeComputedHeight, computedStyles;
                    if (this.isSvg) {
                        computedStyles = getComputedStyle(node);
                        nodeComputedWidth = parseInt(computedStyles.width);
                        nodeComputedHeight = parseInt(computedStyles.height);
                        nodeComputedWidth = isFinite(nodeComputedWidth) ? nodeComputedWidth : 0;
                        nodeComputedHeight = isFinite(nodeComputedHeight) ? nodeComputedHeight : 0;
                        this.nodeWidth = nodeComputedWidth;
                        this.nodeHeight = nodeComputedHeight;
                    }
                    if (this.isDiv) {
                        computedStyles = getComputedStyle(node);
                        nodeComputedWidth = parseInt(computedStyles.width);
                        nodeComputedHeight = parseInt(computedStyles.height);
                        nodeComputedWidth = isFinite(nodeComputedWidth) ? nodeComputedWidth : 0;
                        nodeComputedHeight = isFinite(nodeComputedHeight) ? nodeComputedHeight : 0;
                        this.nodeWidth = nodeComputedWidth;
                        this.nodeHeight = nodeComputedHeight;
                    }
                    if (node instanceof HTMLVideoElement) {
                        this.nodeWidth = node.videoWidth || node.width || 0;
                        this.nodeHeight = node.videoHeight || node.height || 0;
                    }
                    else if (node instanceof HTMLImageElement) {
                        this.nodeWidth = node.naturalWidth || node.width || 0;
                        this.nodeHeight = node.naturalHeight || node.width || 0;
                    }
                    else {
                        var nodeWidth = node.getAttribute('width'), nodeHeight = node.getAttribute('height');
                        this.nodeWidth = this.nodeWidth || (nodeWidth && parseInt(nodeWidth)) || 0;
                        this.nodeHeight = this.nodeHeight || (nodeHeight && parseInt(nodeHeight)) || 0;
                    }
                    this.nodeAspectRatio = this.nodeWidth / this.nodeHeight;
                };
                ObjectFit.prototype.ready = function (callback) {
                    this.loadedPromise.then(callback.bind(this));
                    return this;
                };
                ObjectFit.prototype._fit = function () {
                    var sourceAspectRatio = this.nodeAspectRatio, desiredWidth = this.objectFitNode.clientWidth, desiredHeight = this.objectFitNode.clientHeight;
                    var desiredCropHeight = 0, desiredCropWidth = 0;
                    var desiredAspectRatio = desiredWidth / desiredHeight;
                    if (sourceAspectRatio > desiredAspectRatio) {
                        desiredCropWidth = Math.floor(desiredHeight * sourceAspectRatio);
                        desiredCropHeight = desiredHeight;
                    }
                    else {
                        desiredCropWidth = desiredWidth;
                        desiredCropHeight = Math.floor(desiredWidth / sourceAspectRatio);
                    }
                    if (!isFinite(desiredCropWidth) || !isFinite(desiredCropHeight)) {
                        return;
                    }
                    var node = this.node;
                    var cropOffsetLeft = Math.floor((desiredCropWidth - desiredWidth) / 2), cropOffsetTop = Math.floor((desiredCropHeight - desiredHeight) / 2);
                    node.style.width = desiredCropWidth + 'px';
                    node.style.height = desiredCropHeight + 'px';
                    node.style.left = -cropOffsetLeft + 'px';
                    node.style.top = -cropOffsetTop + 'px';
                };
                return ObjectFit;
            }());
            ObjectFit.prototype.className = 'object-fit';
            exports_1("default", ObjectFit);
        }
    };
});
//# sourceMappingURL=object-fit.js.map
