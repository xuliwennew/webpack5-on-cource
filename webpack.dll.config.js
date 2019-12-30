const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cssExtract = require("mini-css-extract-plugin")
const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")


module.exports = merge(commonConfig,{
    mode:"development",
    entry:{
        react:["react","react-dom"]
    },
    output:{
        filename:"[name].dll.js",
        path:path.resolve(__dirname,"dist"),
        library:"react_dll",
        libraryTarget:"var" //commonjs umd
    },
    plugins:[
        new webpack.DllPlugin({
            name:"react_dll",
            path:path.resolve(__dirname,"dist/manifest.json")
        })
    ]
})