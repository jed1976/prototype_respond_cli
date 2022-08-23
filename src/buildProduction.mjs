import terser from 'rollup-plugin-terser'
import { buildDir, configFile, options } from './constants.mjs'
import { buildPages } from './buildPages.mjs'
import { copyPackageJSON } from './copyPackageJSON.mjs'
import { copySrcDir } from './copySrcDir.mjs'
import { createBundle } from './createBundle.mjs'
import { createIndexFile } from './createIndexFile.mjs'
import { createServer } from './createServer.mjs'
import { emptyBuildDir } from './emptyBuildDir.mjs'
import { npmInstall } from './npmInstall.mjs'
import { removePackageFiles } from './removePackageFiles.mjs'

export const buildProduction = async () => {
  options.input.plugins.push(terser.terser())

  await emptyBuildDir()
  await copySrcDir()
  await copyPackageJSON()
  await npmInstall(buildDir)
  await removePackageFiles()
  await createBundle(options)
  await createIndexFile(false)

  const server = await createServer()
  const module = await import(configFile)
  const routes = module.default.routes()
  const fileredRoutes = routes.filter(route => 'file' in route)

  await buildPages(fileredRoutes)
  await server.close()
}
