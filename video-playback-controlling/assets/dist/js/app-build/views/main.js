System.register(["backbone"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var Backbone, MainView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Backbone_1) {
                Backbone = Backbone_1;
            }
        ],
        execute: function () {
            MainView = /** @class */ (function (_super) {
                __extends(MainView, _super);
                function MainView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MainView.prototype.events = function () {
                    return {
                        'change [name=playback]': 'onInputPlaybackChange',
                        'change [name=source]': 'onVideoSourceChange'
                    };
                };
                MainView.prototype.initialize = function () {
                    this.model = new Backbone.Model({
                        videoState: parseInt(this.el.querySelector('[name=playback]:checked').value)
                    });
                    this.mainVideoNode = this.el.querySelector('#mainVideo');
                    this.framesDroppedCaptionNode = this.el.querySelector('#framesDropped');
                    this.videoStepsTotal = this.el.querySelectorAll('[name=playback]').length;
                    this.listenTo(this.model, 'change:videoState', this.onVideoStateChange);
                    this.listenTo(this.model, 'change:videoSrc', this.onVideoSrcChange);
                    Array.prototype.forEach.call(this.el.querySelectorAll('[name=source]'), function (element) {
                        element.parentElement.insertAdjacentHTML('beforeend', element.value);
                    });
                    this.model.set({ videoSrc: this.el.querySelector('[name=source]:checked').value });
                };
                MainView.prototype.createVideoReadyPromise = function () {
                    var _this = this;
                    return this.videoReadyPromise = new Promise(function (resolve) {
                        _this.videoReadPromiseAttach().then(resolve);
                    });
                };
                MainView.prototype.videoReadPromiseAttach = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var canPlayPromise;
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (this.mainVideoNode.readyState >= this.mainVideoNode.HAVE_ENOUGH_DATA) {
                                return [2 /*return*/, true];
                            }
                            else {
                                canPlayPromise = new Promise(function (resolve) {
                                    var canPlayThrough = function () {
                                        _this.mainVideoNode.removeEventListener('canplaythrough', canPlayThrough);
                                        resolve();
                                    };
                                    _this.mainVideoNode.addEventListener('canplaythrough', canPlayThrough);
                                    var videoPreloader = new XMLHttpRequest();
                                    videoPreloader.open('GET', _this.mainVideoNode.currentSrc);
                                    videoPreloader.responseType = 'blob';
                                    videoPreloader.onload = function (request) {
                                        if (videoPreloader.status !== 200) {
                                            return;
                                        }
                                        _this.mainVideoNode.preload = 'auto';
                                    };
                                    videoPreloader.send();
                                });
                                return [2 /*return*/, canPlayPromise];
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                MainView.prototype.onInputPlaybackChange = function (e) {
                    var inputNode = (e.delegateTarget || e.currentTarget);
                    this.model.set({
                        videoState: parseInt(inputNode.value)
                    });
                };
                MainView.prototype.onVideoSourceChange = function (e) {
                    var inputNode = (e.delegateTarget || e.currentTarget);
                    this.model.set({
                        videoSrc: inputNode.value
                    });
                };
                MainView.prototype.onVideoStateChange = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var videoState;
                        return __generator(this, function (_a) {
                            videoState = this.model.get('videoState');
                            this.videoReadyPromise.then(this.setVideoPositionStep.bind(this, videoState));
                            return [2 /*return*/];
                        });
                    });
                };
                MainView.prototype.setVideoPositionStep = function (videoState) {
                    var durationPerState = this.mainVideoNode.duration / (this.videoStepsTotal - 1);
                    this.playVideo(durationPerState, videoState);
                };
                MainView.prototype.playVideo = function (durationPerState, videoState) {
                    var _this = this;
                    if (this.playbackFrame) {
                        cancelAnimationFrame(this.playbackFrame);
                    }
                    durationPerState = durationPerState * 1000;
                    var videoStartTime = this.mainVideoNode.currentTime * 1000;
                    var videoEndTime = durationPerState * videoState;
                    var playbackDuration = Math.min(Math.abs(videoEndTime - videoStartTime), durationPerState);
                    var playbackStartTime = undefined, now = undefined;
                    var skippedRenderTime = 0;
                    var frameReady = true;
                    this.framesDroppedCaptionNode.innerHTML = '';
                    this.mainVideoNode.pause();
                    this.mainVideoNode.onseeked = function () {
                        frameReady = true;
                    };
                    var playbackLoop = function () {
                        if (!frameReady) {
                            skippedRenderTime += Date.now() - now;
                            now = Date.now();
                            _this.playbackFrame = requestAnimationFrame(playbackLoop);
                            return;
                        }
                        else {
                            now = Date.now();
                            if (playbackStartTime === undefined) {
                                playbackStartTime = now;
                            }
                        }
                        frameReady = false;
                        var nowProper = now - skippedRenderTime;
                        var timeElapsed = nowProper - playbackStartTime;
                        var completed = Math.min(timeElapsed / playbackDuration, 1);
                        if (completed < 1) {
                            var easingFactor = _this.animationEasing(completed, playbackDuration * completed, 0, 1, playbackDuration);
                            var currentVideoTimeEased = (videoEndTime - videoStartTime) * easingFactor + videoStartTime;
                            var currentTime = parseFloat((currentVideoTimeEased / 1000).toFixed(3));
                            _this.mainVideoNode.currentTime = currentTime;
                            _this.playbackFrame = requestAnimationFrame(playbackLoop);
                        }
                        else {
                            _this.mainVideoNode.currentTime = videoEndTime / 1000;
                            _this.mainVideoNode.pause();
                        }
                        _this.framesDroppedCaptionNode.innerHTML = skippedRenderTime / 1000 + "s";
                    };
                    this.playbackFrame = requestAnimationFrame(playbackLoop);
                };
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
                MainView.prototype.animationEasing = function (x, t, b, c, d) {
                    return c * Math.sin(t / d * (Math.PI / 2)) + b;
                };
                MainView.prototype.onVideoSrcChange = function () {
                    var _this = this;
                    this.mainVideoNode.src = this.mainVideoNode.getAttribute('src-base-path') + this.model.get('videoSrc');
                    this.createVideoReadyPromise().then(function () {
                        _this.mainVideoNode.currentTime = 0;
                    });
                };
                return MainView;
            }(Backbone.View));
            exports_1("default", MainView);
            MainView.prototype.el = '#root';
        }
    };
});
//# sourceMappingURL=main.js.map
