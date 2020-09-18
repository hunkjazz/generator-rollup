/* 
 * This file is only useful for executing
 * rollup.js with the CLI.
*/

import typescript from '@rollup/plugin-typescript';

export default {
  input: `src/ts/main.ts`,
  output: {
    format: "cjs",
    sourcemap: true,
    dir: `build/js`,
    file: `bundle.js`
  },
  plugins: [typescript()],
};


