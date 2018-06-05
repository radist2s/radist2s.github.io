System.register([], function (exports_1, context_1) {
    "use strict";
    var imgClasses, imgElementsListTags, imgElementsList;
    var __moduleName = context_1 && context_1.id;
    function isAlreadyLoadedImage(img) {
        if (!img.complete) {
            return false;
        }
        return !!img.naturalWidth;
    }
    function isBrokenImage(img) {
        return img.complete && !img.naturalWidth;
    }
    function onLoad(resolve) {
        resolve(this);
    }
    function onError(reject) {
        reject(this);
    }
    function offEvents(imgListenerLoad, imgListenerError) {
        this.removeEventListener('load', imgListenerLoad);
        this.removeEventListener('error', imgListenerError);
    }
    function isImage(element) {
        return imgClasses.some(function (imgClass) {
            return element instanceof imgClass;
        });
    }
    function imagesLoaded(node) {
        if (!node) {
            return Promise.all([]);
        }
        if (window['jQuery'] && node instanceof window['jQuery'] || (window['Zepto'] && window['Zepto'].zepto.Z === node.constructor)) {
            node = node.get();
        }
        if (node.length === undefined) {
            node = [node];
        }
        var promises = [];
        Array.prototype.forEach.call(node, function (img) {
            if (!isImage(img)) {
                return promises.push(imagesLoaded(img.querySelectorAll(imgElementsList)));
            }
            var imgListenerLoad, imgListenerError;
            var promise = new Promise(function (resolve, reject) {
                if (isAlreadyLoadedImage(img)) {
                    return resolve(img);
                }
                if (isBrokenImage(img)) {
                    return reject(img);
                }
                img.addEventListener('load', imgListenerLoad = onLoad.bind(img, resolve));
                img.addEventListener('error', imgListenerError = onError.bind(img, reject));
            });
            var undelegate = offEvents.bind(img, imgListenerLoad, imgListenerError);
            promise.then(undelegate, undelegate);
            promises.push(promise);
        });
        return Promise.all(promises);
    }
    exports_1("default", imagesLoaded);
    return {
        setters: [],
        execute: function () {
            /**
             * Using: define([images-loaded], imagesLoaded => imagesLoaded(document.querySelectorAll('img')))
             */
            imgClasses = [HTMLImageElement];
            imgElementsListTags = ['img'];
            if (typeof HTMLPictureElement !== String(undefined)) {
                imgClasses.push(HTMLPictureElement);
                imgElementsListTags.push('picture');
            }
            imgElementsList = imgElementsListTags.join();
        }
    };
});
//# sourceMappingURL=images-loaded.js.map
