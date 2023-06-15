const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
      mode: 'development',
      entry: {
        main: './src/main/main.ts',
        preload: './src/main/preload.js'
      },
      target: 'electron-main',
      module: {
        rules: [{
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        }]
      },
      output: {
        path: __dirname + '/dist/main',
        filename: '[name].js'
      },
    },
    {
      mode: 'development',
      entry: './src/main/react.tsx',
      target: 'electron-renderer',
      devtool: 'source-map',
      module: { rules: [{
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }] },
      output: {
        path: __dirname + '/dist/main',
        filename: 'react.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/main/index.html'
        })
      ]
    },
  ];