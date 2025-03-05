import { buildPlugins } from './buildPlugins';
import { buildLosders } from './buildLoaders';
import { buildResolvers } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options) {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLosders(options),
    },
    resolve: buildResolvers(paths.src),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
