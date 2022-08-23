import { h } from '../node_modules/@handwhittled/respond/dist/respond.min.mjs'

export const App = class {
  constructor() {
    this.el = h('rs-app',
      this.content = h('main'),

      this.footer = h('footer', `Copyright © ${new Date().getFullYear()}`),
    )
  }
}
