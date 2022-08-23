import { App } from './App.mjs'
import { listeners } from './listeners.mjs'
import { respond, setChildren } from '../node_modules/@handwhittled/respond/dist/respond.min.mjs'
import renderDocument from './document.mjs'
import routes from './routes.mjs'

const app = new App()
respond(app, routes, listeners)
renderDocument(app)
