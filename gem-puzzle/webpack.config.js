const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',// реж разработчика
    entry: {
        main: './src/index.js'// основной файл. входная точка
    },
    output: {
        filename: '[name].[contenthash].bundle.js',// выходной файл прописывается в index.html
        path: path.resolve(__dirname, 'dist')// папка с готовым проектом
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { from: './src/assetc/', to: './assetc/' },
            ],
          })
    ],

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader'
        }
        ]
      },

}