import autoPreprocess from 'svelte-preprocess'
import postcssImport from 'postcss-import'

const production = !process.env.ROLLUP_WATCH

export default {
  preprocess: [
    autoPreprocess({
      sourceMap: !production,
      postcss: { plugins: [postcssImport(), require('autoprefixer')()] },
      defaults: { style: 'postcss' },
    }),
  ],
}
