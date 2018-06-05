define(function () {
    window.eventNsp = function (event, suffix) {
        if (!suffix) {
            return event
        }

        return jQuery.map(event.split(' '), function (i) {
            return i ? i + '.' + suffix : null
        }).join(' ')
    }

    window.deferredCallbacksRun = function (globalCallbacksName) {
        var callbacks = window[globalCallbacksName]

        if (callbacks instanceof Array) {
            for (var i in callbacks) {
                if (callbacks.hasOwnProperty && !callbacks.hasOwnProperty(i)) {
                    continue
                }

                var callback = callbacks[i]
                if (callback instanceof Function) {
                    callback()
                }
            }
        }

        window[globalCallbacksName] = {
            push: function (callback) {
                if (callback instanceof Function) {
                    callback()
                }
            }
        }
    }
})