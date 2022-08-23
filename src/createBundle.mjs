import rollup from 'rollup'

export const createBundle = async (options) => {
  console.info('Creating Bundle')

  const bundle = await rollup.rollup(options.input)
  await bundle.generate(options.output)
  await bundle.write(options.output)
}
