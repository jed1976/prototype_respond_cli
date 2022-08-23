import chokidar from 'chokidar'
import WebSocket from 'ws'
import { wssPort } from './constants.mjs'
import { buildDevelopment } from './buildDevelopment.mjs'
import { createServer } from './createServer.mjs'

export const watch = async () => {
  let websocket

  const watcher = chokidar.watch('src/**', {
    atomic: true,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 1000
    }
  })

  watcher
    .on('ready', async () => {
      await buildDevelopment()

      const server = await createServer()
      const wss = new WebSocket.Server({ port: wssPort })

      wss.on('connection', (ws, req) => {
        websocket = ws

        ws.on('error', e => {
          console.error(e.message)
        })
      })

      console.info('Watching for changes')
    })
    .on('raw', async (event, pathname, details) => {
      if (details.event === 'unknown') return

      console.info(`Detected change in ${details.path} (${details.event}).`)

      try {
        websocket.send('respond-reload')
      } catch (e) {
      }
    })
}
