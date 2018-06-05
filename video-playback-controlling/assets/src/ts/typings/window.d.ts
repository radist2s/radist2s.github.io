interface AppUrls extends Object {
    homePath: string
    homeUrl: string
    requirejsUrl: string
    jsDistDir: string
    appBuildDir: string
    userTrailingslashit: string
}

interface AppRoute extends Object {
    controller: string
    bind: Array<string>
    rule: string
}

interface AppRoutesList extends Array<AppRoute> {
    
}

interface AppConfig extends Object {
    [key: string]: any
}

interface GaCounter {
    (action: string, type: string, eventData: string, eventAction?: string | number, eventDescription?: string | number): void
}

interface GTagCounter {
    (type: string, action: string, data: string | number | object): void
}


interface yaCounter {
    reachGoal(action: string, params?: object)
    params(params?: object)
    hit(action: string)
}

interface top100Counter {
    sendCustomVars(...params)
    trackPageview(...params)
}

interface Window {
    windowInnerHeight: number
    IS_MOBILE: boolean | number
    DEBUG: boolean | number
    appURLs: AppUrls
    ga: GaCounter
    gtag: GTagCounter
    _gaq: any[][],
    GA_TRACKING_ID: string
    yaCounterInstance: yaCounter
    top100Counter: top100Counter
    appRoutes: AppRoutesList
    appConfig: AppConfig
}

interface Document {
    fonts: {
        ready: Promise<any>
        load(fontType: string, text?: string): Promise<any>
    }
}

declare const IS_MOBILE: boolean | number
declare const DEBUG: boolean | number
declare let windowInnerHeight: number
declare const appURLs: AppUrls
declare const appRoutes: AppRoutesList
declare const appConfig: AppConfig

declare const ga: GaCounter
declare const gtag: GTagCounter
declare const _gaq: any[][]
declare const GA_TRACKING_ID: string
declare const yaCounterInstance: yaCounter
declare const top100Counter: top100Counter

interface HTMLScriptElement {
    onreadystatechange()
}

interface Event {
    readonly delegateTarget: EventTarget;
}

type Mixer<T> = new(...args: any[]) => T
type MixerDefaultGeneric = {}

declare module '*.html!text' {
    const value: string;
    export default value
}