import fsx from 'fs-extra'
import { buildDir, srcDir } from './constants.mjs'

export const createSymlinks = async () => {
  console.info(`Creating Symlinks`)

  const cwd = process.cwd()

  try {
    await fsx.ensureSymlink(cwd + srcDir, buildDir + srcDir)
    await fsx.ensureSymlink(cwd + '/node_modules', buildDir + '/node_modules')
  } catch (e) {
    throw new Error(e)
  }
}
