import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';

const config = {
    input: 'distbuild/src/hello-world-process.js',
    output: {
        dir: 'dist',
        format: 'iife'
    },
    plugins: [
        minifyHTML(),
        resolve()
    ],
    preserveEntrySignatures: false
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;
