import fsx from 'fs-extra'
import { buildDir, srcDir } from './constants.mjs'

export const copySrcDir = async () => {
  console.info('Copying /src Directory')

  await fsx.copy(`.${srcDir}`, buildDir + srcDir)
}
