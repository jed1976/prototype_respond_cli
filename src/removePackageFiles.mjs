import fsx from 'fs-extra'
import { buildDir } from './constants.mjs'

export const removePackageFiles = async () => {
  console.info('Removing package.json and package-lock.json')

  await fsx.remove(buildDir + '/package.json')
  await fsx.remove(buildDir + '/package-lock.json')
}
