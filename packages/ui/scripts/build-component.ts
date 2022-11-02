import { config } from '../vite.config';
import { build } from 'vite';
import { resolve } from 'node:path';
import { readdir, lstat } from 'fs-extra';
import { produce } from 'immer';
import { PROJECT_FILE_NAME } from '../const';

const pathResolve = (...path: string[]) => resolve(__dirname, '../', ...path);

const buildCommand = async () => {
  await build({ ...config, configFile: false });

  const srcDir = pathResolve('src');
  const srcList = await readdir(srcDir);
  const componentList = await srcList.reduce<Promise<string[]>>(
    async (acc, cur) => {
      const result = await acc;
      const componentDir = pathResolve(srcDir, cur);
      const stat = await lstat(componentDir);
      if (
        stat.isDirectory() &&
        (await readdir(componentDir)).includes('index.ts')
      ) {
        result.push(cur);
      }
      return result;
    },
    Promise.resolve([]),
  );

  for (const component of componentList) {
    const outDir = resolve(
      pathResolve(config.build?.outDir || 'dist'),
      component,
    );
    const buildConfig = produce(config, (draft) => {
      if (draft.build) {
        draft.build.emptyOutDir = false;
        draft.build.lib = {
          entry: pathResolve('src', component, 'index.ts'),
          name: component,
          fileName: 'index',
          formats: (config.build?.lib && config.build.lib.formats) || [
            'es',
            'umd',
          ],
        };
        draft.build.outDir = outDir;
        if (draft.build.rollupOptions) {
          if (!Array.isArray(draft.build.rollupOptions.output)) {
            draft.build.rollupOptions.output = {
              ...(draft.build.rollupOptions.output || {}),
              assetFileNames: `assets/${component}.[ext]`,
            };
          }
        } else {
          draft.build.rollupOptions = {
            external: ['vue'],
            output: {
              assetFileNames: `assets/${PROJECT_FILE_NAME}.[ext]`,
              globals: {
                vue: 'Vue',
              },
            },
          };
        }
      }
    });
    console.log('buildConfig', buildConfig);
    await build({ ...buildConfig, configFile: false });
  }
};

buildCommand();
