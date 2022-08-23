import { h, Page, setChildren } from '../../node_modules/@handwhittled/respond/dist/respond.min.mjs'

export default class PageNotFound extends Page {
  constructor(data) {
    super(data)

    this.title = 'Page Not Found'

    setChildren(this.el,
      h('h1', '404'),
      h('p', 'Page Not Found'),
    )
  }
}
