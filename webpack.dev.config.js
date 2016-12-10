const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    // Add your application's scripts below
    'webpack-hot-middleware/client',
    './src/client/index.jsx',
  ],
  output: {
    path: '/../../public/assets/',
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.jsx',
      '.js',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
