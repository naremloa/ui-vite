/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import Unocss from '@unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import { PROJECT_FILE_NAME, PROJECT_NAME } from './const';

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
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#003552',
        },
      },
    },
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
        assetFileNames: `assets/${PROJECT_FILE_NAME}.[ext]`,
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/entry.ts',
      name: PROJECT_NAME,
      fileName: 'entry',
      formats: ['es', 'umd'],
    },
    outDir: './dist',
  },
};

export default defineConfig(config);
