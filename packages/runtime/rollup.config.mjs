import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'tsc/index.js',
  plugins: [cleanup()],
  output: [
    {
      file: 'dist/k-fe-fwk.js',
      format: 'esm',
      plugins: [filesize()],
    },
  ],
}