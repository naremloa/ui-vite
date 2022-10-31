/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import Unocss from '@unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';

const isProduction = process.env.NODE_ENV === 'production';
console.log('isProduction', isProduction);

export const config: UserConfig = {
  plugins: [
    vue(),
    dts(),
    Unocss({
      envMode: isProduction ? 'build' : 'dev',
      presets: [presetUno(), presetAttributify(), presetIcons()],
      // mode: "vue-scoped",
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: true,
    minify: isProduction,
    reportCompressedSize: true,
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      formats: ['es'],
    },
    outDir: './dist',
  },
};

export default defineConfig(config);
