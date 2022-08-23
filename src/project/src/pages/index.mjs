import { h, Page, setChildren } from '../../node_modules/@handwhittled/respond/dist/respond.min.mjs'

export default class Home extends Page {
  constructor(data) {
    super(data)

    this.title = 'Home'
    this.metaDescription = 'Hello, World!'

    setChildren(this.el,
      h('h1', 'Home'),
    )
  }
}
