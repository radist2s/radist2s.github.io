define(function () {
    function ResponsiveBgImageSource(nodes) {
        if (!nodes) {
            return
        }

        if (nodes instanceof HTMLElement) {
            nodes = [nodes]
        }
        
        this.bgNodes = [].slice.call(nodes)
        this.imageNodes = []

        for (var i = 0, imageSourceNode; i >= 0 && i < this.bgNodes.length; i++) {
            imageSourceNode = this.bgNodes[i].querySelector(this.imageSourceSelector)

            if (imageSourceNode) {
                this.imageNodes.push(imageSourceNode)
            }
            else {
                this.bgNodes.splice(i--, 1)
            }
        }
    }

    ResponsiveBgImageSource.prototype.update = function update() {
        this.nodesSrc = this.nodesSrc || []

        this.imageNodes && this.imageNodes.forEach(this.updateImageNode, this)
    }

    ResponsiveBgImageSource.prototype.updateImageNode = function updateImageNode(imageNode, i) {
        var currentSrc = imageNode.currentSrc || imageNode.src

        if (this.nodesSrc[i] !== currentSrc) {
            this.nodesSrc[i] = currentSrc

            this.bgNodes[i].style.backgroundImage = 'url(' + currentSrc + ')'
        }
    }

    ResponsiveBgImageSource.prototype.imageSourceSelector = '.responsiveBgImageSource'

    return ResponsiveBgImageSource
})