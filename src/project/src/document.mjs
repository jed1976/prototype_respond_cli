import { h, setChildren } from '../node_modules/@handwhittled/respond/dist/respond.min.mjs'

export default (app) => {
  document.documentElement.lang = 'en'

  setChildren(document.head,
    // Meta
    h('meta', { charset: 'utf-8' }),
    h('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }),
    h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),

    // Styles
    h('link', { href: '/src/css/index.css', media: 'screen', rel: 'stylesheet' }),

    // Scripts
    h('script', { src: '/src/index.mjs', type: 'module' }),

    // Favicon
    h('link', { href: '/src/favicon.ico', rel: 'icon' }),

    // Manifest
    h('link', { href: '/src/manifest.json', rel: 'manifest' }),
  )

  setChildren(document.body, app)
}
