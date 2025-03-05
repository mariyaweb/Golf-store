// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import loader from 'sass-loader';

export function buildLosders({ isDev }) {
  const cssLoader = {
    test: /\.(c|sa|sc)ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const jsLoader = {
    test: /.jsx?/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
    }],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    type: 'asset/resource',
  };

  return [
    cssLoader,
    jsLoader,
    svgLoader,
    fileLoader,
  ];
}
