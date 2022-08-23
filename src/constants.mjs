import child_process from 'child_process'
import resolve from 'rollup-plugin-node-resolve'
import path from 'path'

// Constants
export const __dirname = path.dirname(new URL(import.meta.url).pathname)
export const buildDir = './public'
export const defaultFile = '/default.html'
export const { execSync } = child_process
export const indexFile = 'index.html'
export const port = 8020
export const host = `http://127.0.0.1:${port}`
export const options = {
  input: {
    input: 'src/index.mjs',
    external: [
      path.resolve('./node_modules/@handwhittled/respond/dist/respond.mjs')
    ],
    plugins: [resolve()],
    inlineDynamicImports: true,
  },
  output: {
    file: 'public/src/index.mjs',
    format: 'esm',
  }
}
export const configFile = `${process.cwd()}/src/config.mjs`
export const srcDir = '/src'
export const timerName = 'Build Time'
export const wssPort = 8021
