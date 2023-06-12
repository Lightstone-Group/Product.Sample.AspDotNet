// eslint-disable-next-line import/no-extraneous-dependencies
import { fromRollup } from '@web/dev-server-rollup';
// eslint-disable-next-line import/no-extraneous-dependencies
import rollupReplace from '@rollup/plugin-replace';

const replace = fromRollup(rollupReplace);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');


export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/demo/',
  /** Use regular watch mode if HMR is not enabled. */
  watch: !hmr,
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  plugins: [
    replace({
      include: ['distbuild/src/*.js', 'distbuild/src/**/*.js', 'demo/scripts/tokenEnrichment.js'],
      preventAssignment: false
    }),
  ],

});
