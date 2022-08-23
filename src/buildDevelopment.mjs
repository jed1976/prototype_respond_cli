import { createIndexFile } from './createIndexFile.mjs'
import { createSymlinks } from './createSymlinks.mjs'
import { emptyBuildDir } from './emptyBuildDir.mjs'

export const buildDevelopment = async () => {
  await emptyBuildDir()
  await createSymlinks()
  await createIndexFile()
}
