const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cssExtract = require("mini-css-extract-plugin")
const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig,{
    // watch:true,
    // watchOptions:{
    //    poll:300
    // },
    mode:"development", // production 
    entry:{
        main:"./src/main.js",
        onepage:"./src/pages/onepage/one.js"
    },     
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js"  
    } ,
    plugins:[
     
        new cssExtract({
           filename:"css/[name].css",
           chunkFilename: '[id].css',
        }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        //全局
        new webpack.ProvidePlugin({
           $:"jquery"
        }),
        new webpack.DefinePlugin({
           MODE:JSON.stringify("online")
        }),
        new htmlWebpackPlugin({
            template:"./template.html",
            filename:"index.html",
            chunks:["main"]
        }),
        new htmlWebpackPlugin({
            template:"./template.html",
            filename:"one.html",
            chunks:["onepage"]
        }) 
    ]
})