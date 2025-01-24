import webpack from "webpack";

export function buildDevServer(options) {

  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}