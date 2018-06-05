void function () {
    const isBrowser = typeof window !== String(undefined)

    let {appBaseURL, appBuildDir} = isBrowser
        ? appURLs // WP function.php
        : global.systemConfigDefs // gulp task config

    SystemJS.config({
        warnings: typeof DEBUG === 'undefined' ? true : DEBUG,

        baseURL: appBaseURL,
        packages: {
            '.': {
                format: 'cjs',
                defaultExtension: 'js'
            },
            [appBuildDir]: {
                format: 'system',
                defaultExtension: 'js'
            },
            'third-party': {
                defaultExtension: 'js'
            }
        },
        map: {
            'es6-promise': `${appBuildDir}/modules/es6-promise`,
            'backbone': 'third-party/exoskeleton/exoskeleton-loader',
            'jquery': `${appBuildDir}/vendor/jquery`,
            'underscore': 'lodash',
            'swiper': 'third-party/swiper/swiper',
            'text': 'third-party/systemjs/text'
        },
        paths: {
            'modules/': `${appBuildDir}/modules/`,
            'common/': `${appBuildDir}/common/`,
            'views/': `${appBuildDir}/views/`,
            'models/': `${appBuildDir}/models/`,
            'page-view-main/': `${appBuildDir}/views/pages/page-view-main/`,
            'lodash': `${appBuildDir}/vendor/lodash/lodash`
        },
        meta: {
            [`${appBuildDir}/*`]: {
                deps: ['third-party/class-list', `${appBuildDir}/vendor/element-dataset`]
            },
            'third-party/*': {
                format: 'cjs',
                esModule: true
            },
            [`${appBuildDir}/vendor/*`]: {
                format: 'cjs',
                esModule: true
            }
        }
    })

    if (isBrowser) {
        SystemJS.import(`${appBuildDir}/index`)
    }
}()