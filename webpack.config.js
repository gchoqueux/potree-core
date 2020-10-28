const path = require('path');
//const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

function resolve(name) {
  return path.resolve(__dirname, name);
}

module.exports = {
  // mode: 'development',
  entry: {
    Potree: './source/Main.js'
  },
  module: {
    rules: [
      {
        test: /Worker\.js$/,
        loader: 'worker-loader',
        include: [resolve('source')],
        options: { inline: 'no-fallback' },
      },
    ],
  },
  resolve: {
      modules: [path.resolve(__dirname, 'source'), 'node_modules'],
  },
  // resolve: {
  //   extensions: [ '.js' ],
  // },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd',
      umdNamedDefine: true,
  },
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  devServer: {
      publicPath: '/dist/',
  },
  // watch: true,
  // externals: {
  //   three: {
  //     commonjs: 'three',
  //     amd: 'three',
  //     root: '_',
  //   },
  // },
  // devServer: {
  //       contentBase: path.resolve(__dirname, "./public"),
  //       historyApiFallback: true,
  //       inline: true,
  //       // open: true,
  //       hot: true
  //   },
};
