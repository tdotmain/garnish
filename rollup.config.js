const resolveExternalPeerDeps = require("rollup-plugin-peer-deps-external");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const jsx = require('acorn-jsx')
const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')
const svgr = require('@svgr/rollup');

const packageJson = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

const globals = {
  ...packageJson.devDependencies,
  ...packageJson.peerDependencies,
};

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.svg'];

export default [{
  input: 'src/index',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    svgr({
      expandedProps: true,
      memo: true,
      typescript: true,
      ref: true,
    }),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
      exportGlobals: true,
      minimize: true,
      sourceMap: false,
      // minimize: true,
      // extract: false,
      // modules: true,
      globalModulePaths: [/src\/styles/],
      modules: {
        // see generateScopedName options here
        // https://github.com/css-modules/postcss-modules
        generateScopedName: '[local]',
      },
    }),
    resolveExternalPeerDeps(),
    nodeResolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions
    }),
    commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true,
    }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      // compilerOptions: { jsx: 'preserve' },
    }),
    isProd && terser()
  ],
  external: Object.keys(packageJson.peerDependencies),
}];