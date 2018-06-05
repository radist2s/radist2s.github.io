'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

void function () {
    var _packages, _meta;

    var isBrowser = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== String(undefined);

    var _ref = isBrowser ? appURLs // WP function.php
    : global.systemConfigDefs,
        appBaseURL = _ref.appBaseURL,
        appBuildDir = _ref.appBuildDir; // gulp task config

    SystemJS.config({
        warnings: typeof DEBUG === 'undefined' ? true : DEBUG,

        baseURL: appBaseURL,
        packages: (_packages = {
            '.': {
                format: 'cjs',
                defaultExtension: 'js'
            }
        }, _defineProperty(_packages, appBuildDir, {
            format: 'system',
            defaultExtension: 'js'
        }), _defineProperty(_packages, 'third-party', {
            defaultExtension: 'js'
        }), _packages),
        map: {
            'es6-promise': appBuildDir + '/modules/es6-promise',
            'backbone': 'third-party/exoskeleton/exoskeleton-loader',
            'jquery': appBuildDir + '/vendor/jquery',
            'underscore': 'lodash',
            'swiper': 'third-party/swiper/swiper',
            'text': 'third-party/systemjs/text'
        },
        paths: {
            'modules/': appBuildDir + '/modules/',
            'common/': appBuildDir + '/common/',
            'views/': appBuildDir + '/views/',
            'models/': appBuildDir + '/models/',
            'page-view-main/': appBuildDir + '/views/pages/page-view-main/',
            'lodash': appBuildDir + '/vendor/lodash/lodash'
        },
        meta: (_meta = {}, _defineProperty(_meta, appBuildDir + '/*', {
            deps: ['third-party/class-list', appBuildDir + '/vendor/element-dataset']
        }), _defineProperty(_meta, 'third-party/*', {
            format: 'cjs',
            esModule: true
        }), _defineProperty(_meta, appBuildDir + '/vendor/*', {
            format: 'cjs',
            esModule: true
        }), _meta)
    });

    if (isBrowser) {
        SystemJS.import(appBuildDir + '/index');
    }
}();
//# sourceMappingURL=systemjs.config.js.map
