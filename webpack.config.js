import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default () => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = process.env.NODE_ENV || 'development';
  const PORT = process.env.PORT || 4000;
  const isDev = mode === 'development';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
