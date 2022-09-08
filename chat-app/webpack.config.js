const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  devtool: 'inline-source-map',
  devServer: {
    client: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cashing',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};