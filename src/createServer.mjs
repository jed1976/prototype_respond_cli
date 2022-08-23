import LocalWebServer from 'local-web-server'
import { buildDir, defaultFile, host, port } from './constants.mjs'

export const createServer = async (directory = buildDir, spa = defaultFile) => {
  const localWebServer = new LocalWebServer()

  console.info(`Server running at: ${host}`)

  return localWebServer.listen({ directory, port, spa })
}
