## Note
* babel-core 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-register 实时转码，只要使用require()加载.js .jsx等文件时，先用babel进行es6转码
* babel-polyfill Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy 、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。比如ES6新增了Array.from方法，要想运行这个方法就必须提供babel-polyfill
* url-loader&file-loader
* mimetype&limit&name
* json-loader 用来将json字符串转化成对象
* imports-loader 允许我们使用需要依赖指定全局变量的模块,这个加载器对于依赖全局变量比如$或者可以指向window对象的this的第三方模块很有用处
* webpack-dev-middleware 只可用于演示，不能用于真正的产品中，对于webpack来说是一个简单的中间件包装器，服务于从webpack将文件发送到一个连接的服务器中
