#!/usr/bin/env node --experimental-modules

import { buildProduction } from './buildProduction.mjs'
import { createProject } from './createProject.mjs'
import { serve } from './serve.mjs'
import { watch } from './watch.mjs'

const command = process.argv[2]
const extra = process.argv[3]

if (typeof command === 'undefined') {
  console.error('Commands: build, develop, new, or serve.')
  console.error('Example: respond new my-project-name')
  process.exit(0)
}

switch (command) {
  case 'build': buildProduction(); break
  case 'develop': watch(); break
  case 'new': createProject(extra); break
  case 'serve': serve(); break

  default:
    console.error('This specific command is not supported.')
    process.exit(0)
}
