const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cssExtract = require("mini-css-extract-plugin")
const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")


module.exports = merge(commonConfig,{
    mode:"development", //tree shaking
    entry:{
        app:"./src/main.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
    }, 
    module:{
        noParse: /jquery/
    }
})