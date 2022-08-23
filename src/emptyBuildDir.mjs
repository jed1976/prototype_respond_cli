import fsx from 'fs-extra'
import { buildDir } from './constants.mjs'

export const emptyBuildDir = async () => {
  if (await fsx.exists(buildDir)) {
    console.info('Emptying Build Directory')

    await fsx.emptyDir(buildDir)
  } else {
    console.info('Creating Build Directory')

    await fsx.mkdir(buildDir)
  }
}
