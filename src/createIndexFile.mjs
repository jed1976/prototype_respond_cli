import domino from 'domino'
import puppeteer from 'puppeteer'
import { buildDir, defaultFile } from './constants.mjs'
import { writeHTMLFile } from './writeHTMLFile.mjs'

export const createIndexFile = async (dev = true) => {
  console.info('Creating Index File')

  const domimpl = domino.createDOMImplementation()
  global.document = domimpl.createHTMLDocument()
  global.SVGElement = domino.impl.SVGElement

  const module = await import(`${process.cwd()}/src/config.mjs`)
  await module.default.document()

  document.documentElement.setAttribute(
    dev ? 'dev' : 'build',
    dev ? true : false
  )

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    await page.setContent(document.outerHTML)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  await writeHTMLFile(buildDir, defaultFile, await page.content())
  await browser.close()
}
