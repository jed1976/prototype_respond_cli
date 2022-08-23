import fsx from 'fs-extra'

export const writeHTMLFile = async (dir, filename, content) => {
  const whiteSpaceRegex = /\r?\n\s+|\n/g
  await fsx.writeFile(dir + filename, content.replace(whiteSpaceRegex, ''))
}
