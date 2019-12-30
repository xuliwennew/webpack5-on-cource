
## webpack4x的安装与配置
 webpack
 webpack-cli
 
 全局安装 4.4x
 npm install webpack webpack-cli -g

## 查看webpack-cli命令参数
webpack --help

--config: 指定配置文件的路径 
--entry : 指定编译入口
--output: 指定编译后文件输出
--watch: 监听编译
--progress: 查看编译进度
--mode : 指定编译打包方式 默认 production / development


## 使用webpack 命令对需要编译的代码进行编译

webpack --entry ./src/main.js --output ./dist/bundle.js --mode development

webpack.config.js
webpack 默认的当前的目录下找webpack.config.js
webpack --config webpack.dev.config.js
