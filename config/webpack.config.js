var webpack = require('webpack');
var path = require('path');


module.exports = {

    //Default: process.cwd(), 返回当前进程工作所在的目录
    context: __dirname + "./src",

    //入口文件,可以是string、array或者是object，可以设置多个入口文件，
    //以键值对的形式
    entry: "./src/app.js",

    //出口文件
    output: {
      //定义打包输出文件的路径，注意：可以有多个entry的值，但是只有一个指定的output配置
      path: __dirname + "/dist",
      filename: "bundle.js"
      // publicPath:
    },
    module: {
      loaders:[
        {
          test:/\.js$/,
          include: [
            path.resolve(__dirname, "..", "src")
          ],
          loaders: [
            'babel'
          ]
        }
      ]
    }
};
