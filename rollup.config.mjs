import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
// import styles from 'rollup-plugin-styles';
import typescript from '@rollup/plugin-typescript';
// import * as packageJson from './package.json' assert { type: `json` };
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

// const packageJson = require('./package.json');
// console.log(packageJson)
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      // name: 'react-lib',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: `dist/umd/autoship-ui@${packageJson.version}/index.js`,
      format: 'umd',
      sourcemap: true,
      name: 'AutoShipUI',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    external('React'),
    commonjs(),
    linaria({
      sourceMap: true,
    }),
    css({
      output: 'styles.css',
    }),
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
