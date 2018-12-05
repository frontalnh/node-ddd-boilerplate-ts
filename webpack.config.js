const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack'); // dotenv work in webpack
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // tsconfig.js 파일 설정

module.exports = {
  entry: './src/server/index.ts',
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    net: 'empty',
    fs: 'empty'
  },
  module: {
    rules: [
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/, // tsx
        loader: 'ts-loader'
      },
      {
        test: /\.css$/, // css
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json' // setup tsconfig path
      })
    ]
  },
  plugins: [new Dotenv()]
};
