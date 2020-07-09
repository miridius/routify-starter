import { createRollupConfigs } from './scripts/base.config.js'
import { configMerger } from './scripts/config-utils'
import svelteConfig from './svelte.config.js'
import typescript from '@rollup/plugin-typescript'

const production = !process.env.ROLLUP_WATCH

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: configMerger({
    plugins: [typescript({ sourceMap: !production })],
  }),
  svelteWrapper: configMerger(svelteConfig),
  swWrapper: worker => worker,
}

const configs = createRollupConfigs(config)

export default configs

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/

/**
  The configMerger function builds a wrapper which merges in new config

  import { configMerger } from './scripts/config-utils'

  svelteWrapper: configMerger({
    preprocess: mdsvex({ extension: '.md' }),
  })

  rollupWrapper: configMerger({
    plugins: [myPlugin()],
  })
*/
