var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var contextPath = path.resolve(__dirname, '..', 'src');
const outputPath = path.resolve(__dirname, '..', 'dist');
var entryPath = path.resolve(__dirname, '..', 'src', 'entry.js');

module.exports = {

    //Default: process.cwd(), 返回当前进程工作所在的目录
    context: contextPath,

    //入口文件,可以是string、array或者是object，可以设置多个入口文件，
    //以键值对的形式
    entry: {
      entryPath
    },

    //出口文件
    output: {
      //定义打包输出文件的路径，注意：可以有多个entry的值，但是只有一个指定的output配置
      path: outputPath,
      filename: "bundle.js"
      // publicPath: "./dist/"
    },
    module: {
      loaders:[
        {
          test:/\.js?$/,
          include: [
            path.resolve(__dirname, "..", "src")
          ],
          loaders: ["babel"],
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/,
          // loader: ExtractTextPlugin.extract("style-loader","css-loader")
          loader: ExtractTextPlugin.extract("style!css")
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style!css!sass")
        },
        {
          test: /\.(jpg|png)$/,
          loader: "url?limit=10000&name=images/[name]-[hash].[ext]"
        }
      ]
    },
    resolve: {
      modules:[
        'node_modules',
        path.resolve(__dirname, '')
      ],
      extensions: ['','.js']
    },
    devServer: {
      //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
      contentBase: path.resolve(__dirname, '..'),
      // hot: true,
      port: 8086, //默认端口为8080
      inline: true  //设置为true时, 当源文件改变会自动刷新页面
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
