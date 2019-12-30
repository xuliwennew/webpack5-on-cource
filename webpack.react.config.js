const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cssExtract = require("mini-css-extract-plugin")
const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")


module.exports = merge(commonConfig,{

    optimization:{
       splitChunks:{ //公共代码抽取
           cacheGroups:{ //配置需要抽象的分类组
               vendor:{  //配置从node_modules中引用的文件
                   test:/node_modules/,
                   name:"vendor",
                   chunks:"all",
                   minSize:0, //抽取的代码大小
                   minChunks:1, // 引用的模块的次数，2
                   priority:1
               },
               common:{  //抽取的打包的分类名 
                  name:"common",
                  chunks:"initial",  //从entry
                  minSize:0, //抽取的代码大小
                  minChunks:2 // 引用的模块的次数，2
               },
               
           }
       }
    },
    
    mode:"development",
    entry:{
        page1:"./src/pages/page1.js" ,
        page2:"./src/pages/page2.js",
        main:"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
    },
    plugins:[
         
    ]
})