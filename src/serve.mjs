import { createServer } from './createServer.mjs'

export const serve = async () => {
  await createServer('public/', 'index.html')
}
