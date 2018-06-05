import * as Backbone from 'backbone'

export default class MainView extends Backbone.View<Backbone.Model> {
    el: HTMLElement
    private mainVideoNode: HTMLVideoElement
    private videoReadyPromise: Promise<any>
    private videoStepsTotal: number
    private playbackFrame: number
    private framesDroppedCaptionNode: HTMLElement

    events() {
        return {
            'change [name=playback]': 'onInputPlaybackChange',
            'change [name=source]': 'onVideoSourceChange'
        }
    }

    initialize() {
        this.model = new Backbone.Model({
            videoState: parseInt((this.el.querySelector('[name=playback]:checked') as HTMLInputElement).value)
        })

        this.mainVideoNode = this.el.querySelector('#mainVideo') as HTMLVideoElement
        this.framesDroppedCaptionNode = this.el.querySelector('#framesDropped') as HTMLElement

        this.videoStepsTotal = this.el.querySelectorAll('[name=playback]').length

        this.listenTo(this.model, 'change:videoState', this.onVideoStateChange)
        this.listenTo(this.model, 'change:videoSrc', this.onVideoSrcChange)

        Array.prototype.forEach.call(this.el.querySelectorAll('[name=source]'), function (element: HTMLInputElement) {
            element.parentElement.insertAdjacentHTML('beforeend', element.value)
        })

        this.model.set({videoSrc: (this.el.querySelector('[name=source]:checked') as HTMLInputElement).value})
    }

    createVideoReadyPromise() {
        return this.videoReadyPromise = new Promise((resolve) => {
            this.videoReadPromiseAttach().then(resolve)
        })
    }

    async videoReadPromiseAttach() {
        if (this.mainVideoNode.readyState >= this.mainVideoNode.HAVE_ENOUGH_DATA) {
            return true
        }
        else {
            const canPlayPromise = new Promise((resolve) => {
                const canPlayThrough = () => {
                    this.mainVideoNode.removeEventListener('canplaythrough', canPlayThrough)

                    resolve()
                }

                this.mainVideoNode.addEventListener('canplaythrough', canPlayThrough)

                const videoPreloader = new XMLHttpRequest()
                videoPreloader.open('GET', this.mainVideoNode.currentSrc)
                videoPreloader.responseType = 'blob'

                videoPreloader.onload = (request) => {
                    if (videoPreloader.status !== 200) {
                        return
                    }

                    this.mainVideoNode.preload = 'auto'
                }

                videoPreloader.send()
            })

            return canPlayPromise
        }
    }

    onInputPlaybackChange(e: Event) {
        const inputNode = (e.delegateTarget || e.currentTarget) as HTMLInputElement

        this.model.set({
            videoState: parseInt(inputNode.value)
        })
    }

    onVideoSourceChange(e: Event) {
        const inputNode = (e.delegateTarget || e.currentTarget) as HTMLInputElement

        this.model.set({
            videoSrc: inputNode.value
        })
    }

    private async onVideoStateChange() {
        const videoState = this.model.get('videoState')

        this.videoReadyPromise.then(this.setVideoPositionStep.bind(this, videoState))
    }

    private setVideoPositionStep(videoState) {
        const durationPerState = this.mainVideoNode.duration / (this.videoStepsTotal - 1)

        this.playVideo(durationPerState, videoState)
    }

    private playVideo(durationPerState, videoState) {
        if (this.playbackFrame) {
            cancelAnimationFrame(this.playbackFrame)
        }

        durationPerState = durationPerState * 1000

        const videoStartTime = this.mainVideoNode.currentTime * 1000

        const videoEndTime = durationPerState * videoState

        const playbackDuration = Math.min(Math.abs(videoEndTime - videoStartTime), durationPerState)

        let playbackStartTime = undefined,
            now = undefined

        let skippedRenderTime = 0

        let frameReady = true

        this.framesDroppedCaptionNode.innerHTML = ''

        this.mainVideoNode.pause()

        this.mainVideoNode.onseeked = function () {
            frameReady = true
        }

        const playbackLoop = () => {
            if (!frameReady) {
                skippedRenderTime += Date.now() - now

                now = Date.now()

                this.playbackFrame = requestAnimationFrame(playbackLoop)

                return
            }
            else {
                now = Date.now()

                if (playbackStartTime === undefined) {
                    playbackStartTime = now
                }
            }

            frameReady = false

            const nowProper = now - skippedRenderTime

            const timeElapsed = nowProper - playbackStartTime

            const completed = Math.min(timeElapsed / playbackDuration, 1)

            if (completed < 1) {
                const easingFactor = this.animationEasing(completed, playbackDuration * completed, 0, 1, playbackDuration)

                const currentVideoTimeEased = (videoEndTime - videoStartTime) * easingFactor + videoStartTime

                const currentTime = parseFloat((currentVideoTimeEased / 1000).toFixed(3))

                this.mainVideoNode.currentTime = currentTime

                this.playbackFrame = requestAnimationFrame(playbackLoop)
            }
            else {
                this.mainVideoNode.currentTime = videoEndTime / 1000

                this.mainVideoNode.pause()
            }

            this.framesDroppedCaptionNode.innerHTML = `${skippedRenderTime / 1000}s`
        }

        this.playbackFrame = requestAnimationFrame(playbackLoop)
    }

    /**
     * easeOutSine
     *
     * @param x
     * @param t
     * @param b
     * @param c
     * @param d
     * @return {any}
     */
    private animationEasing(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    }

    private onVideoSrcChange() {
        this.mainVideoNode.src = this.mainVideoNode.getAttribute('src-base-path') + this.model.get('videoSrc')

        this.createVideoReadyPromise().then(() => {
            this.mainVideoNode.currentTime = 0
        })
    }
}

MainView.prototype.el = <HTMLElement><any>'#root'