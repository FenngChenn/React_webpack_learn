# react_webpack_learn

## Note
* babel-core 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-register 实时转码，只要使用require()加载.js .jsx等文件时，先用babel进行es6转码
* babel-polyfill Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。比如ES6新增了Array.from方法，要想运行这个方法就必须提供babel-polyfill
