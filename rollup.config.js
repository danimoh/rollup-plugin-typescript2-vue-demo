import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/MyComponent.vue',
  output: {
    format: 'esm',
    file: 'dist/MyComponent.js'
  },
  external: ['vue'],
  plugins: [
    typescript({
        verbosity: 3,
        clean: true,
    }),
    vue(),
  ]
}
