import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'tsc/index.js',
  plugins: [cleanup(), typescript()],
  output: [
    {
      file: 'dist/k-fe-fwk.js',
      format: 'esm',
      plugins: [filesize()],
    },
  ],
}