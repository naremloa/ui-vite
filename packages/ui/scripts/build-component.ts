import { config } from '../vite.config';
import { build, LibraryOptions, UserConfig } from 'vite';
import { resolve } from 'node:path';
import { readdir, lstat } from 'fs-extra';

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
    const custom: { lib: LibraryOptions; outDir: string } = {
      lib: {
        entry: pathResolve('src', component, 'index.ts'),
        name: component,
        fileName: 'index',
        formats: (config.build?.lib && config.build.lib.formats) || [
          'es',
          'umd',
        ],
      },
      outDir,
    };
    const buildConfig: UserConfig = {
      ...config,
      build: {
        ...config.build,
        emptyOutDir: false,
        ...custom,
      },
    };
    console.log('buildConfig', buildConfig);
    await build({ ...buildConfig, configFile: false });
  }
};

buildCommand();
