/**
 * Using: define([images-loaded], imagesLoaded => imagesLoaded(document.querySelectorAll('img')))
 */
const imgClasses: any[] = [HTMLImageElement]

let imgElementsListTags = ['img']

if (typeof HTMLPictureElement !== String(undefined)) {
    imgClasses.push(HTMLPictureElement)
    imgElementsListTags.push('picture')
}

const imgElementsList = imgElementsListTags.join()

function isAlreadyLoadedImage(img) {
    if (!img.complete) {
        return false
    }

    return !!img.naturalWidth
}

function isBrokenImage(img) {
    return img.complete && !img.naturalWidth
}

function onLoad(resolve) {
    resolve(this)
}

function onError(reject) {
    reject(this)
}

function offEvents(imgListenerLoad, imgListenerError) {
    this.removeEventListener('load', imgListenerLoad)
    this.removeEventListener('error', imgListenerError)
}

function isImage(element) {
    return imgClasses.some(function (imgClass) {
        return element instanceof imgClass
    })
}

export default function imagesLoaded(node) {
    if (!node) {
        return Promise.all([])
    }

    if (window['jQuery'] && node instanceof window['jQuery'] || (window['Zepto'] && window['Zepto'].zepto.Z === node.constructor)) {
        node = node.get()
    }

    if (node.length === undefined) {
        node = [node]
    }

    const promises = [];

    Array.prototype.forEach.call(node, function (img) {
        if (!isImage(img)) {
            return promises.push(imagesLoaded(img.querySelectorAll(imgElementsList)))
        }

        let imgListenerLoad,
            imgListenerError;

        const promise = new Promise(function (resolve, reject) {
            if (isAlreadyLoadedImage(img)) {
                return resolve(img)
            }

            if (isBrokenImage(img)) {
                return reject(img)
            }

            img.addEventListener('load', imgListenerLoad = onLoad.bind(img, resolve))
            img.addEventListener('error', imgListenerError = onError.bind(img, reject))
        });

        const undelegate = offEvents.bind(img, imgListenerLoad, imgListenerError);

        promise.then(undelegate, undelegate)

        promises.push(promise)
    })

    return Promise.all(promises)
}