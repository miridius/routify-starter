import autoPreprocess from 'svelte-preprocess'
import postcssImport from 'postcss-import'

export default {
  preprocess: [
    autoPreprocess({
      postcss: { plugins: [postcssImport()] },
      defaults: { style: 'postcss' },
    }),
  ],
}
