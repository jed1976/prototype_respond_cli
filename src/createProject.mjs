import fsx from 'fs-extra'
import path from 'path'
import { __dirname } from './constants.mjs'
import { npmInstall } from './npmInstall.mjs'

export const createProject = async (name) => {
  if (typeof name === 'undefined') {
    console.error('Please specify a name for your project.')
    process.exit(0)
  }

  const dest = process.cwd() + path.sep + name
  const src = __dirname + path.sep + 'project'

  try {
    await fsx.mkdir(dest)
  } catch (e) {
    console.error(e.toString())
    process.exit(e.errno)
  }

  try {
    await fsx.copy(src, dest)
  } catch (e) {
    console.error(e.toString())
    process.exit(e.errno)
  }

  try {
    const pkgFile = dest + path.sep + 'package.json'
    const pkg = await fsx.readJson(pkgFile)
    pkg.name = name
    await fsx.writeJson(pkgFile, pkg)
  } catch (e) {
    console.error(e)
    process.exit(e.errno)
  }

  console.info(`Project created at '${dest}'.`)

  await npmInstall(name)

  process.exit(0)
}
