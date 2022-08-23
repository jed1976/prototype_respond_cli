import child_process from 'child_process'

const { execSync } = child_process

export const npmInstall = (dir) => {
  console.info('Running NPM install')

  execSync(`cd ${dir}; npm install`, { encoding: 'utf8' })
}
