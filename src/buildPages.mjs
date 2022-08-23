import fsx from 'fs-extra'
import puppeteer from 'puppeteer'
import { buildDir, defaultFile, host, indexFile, timerName } from './constants.mjs'
import { writeHTMLFile } from './writeHTMLFile.mjs'

export const buildPages = async (routes) => {
  console.time(timerName)

  const RENDER_CACHE = new Map()
  const browser = await puppeteer.launch({ headless: true })

  for (const route of routes) {
    console.info(`Building: ${route.path}`)

    const page = await browser.newPage()
    await page.setRequestInterception(true)

    page.on('pageerror', e => {
      throw new Error(e)
    })

    page.on('request', req => {
      const whitelist = ['document', 'script', 'xhr', 'fetch', 'other']

      if (whitelist.includes(req.resourceType()) === false) {
        return req.abort()
      }

      req.continue()
    })

    try {
      await page.goto(`${host}${route.path}`)
      await page.waitForSelector('html[build="true"]')
    } catch (e) {
      throw new Error(e)
    }

    await page.evaluate(() => document.documentElement.removeAttribute('build'))
    const content = await page.content()
    await page.close()

    RENDER_CACHE.set(route, content)
  }

  await browser.close()

  RENDER_CACHE.forEach(async (content, route) => {
    await fsx.ensureDir(buildDir + route.path)
    await writeHTMLFile(buildDir, route.path + indexFile, content)
  })

  await fsx.remove(buildDir + defaultFile)

  console.timeEnd(timerName)
}
