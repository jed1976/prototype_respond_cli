import fsx from 'fs-extra'
import { buildDir } from './constants.mjs'

export const copyPackageJSON = async () => {
  console.info('Copying package.json')

  await fsx.copy('./package.json', buildDir + '/package.json')
}
