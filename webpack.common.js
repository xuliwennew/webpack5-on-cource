const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cssExtract = require("mini-css-extract-plugin")

module.exports = {

    devServer:{
       port:8081,
       contentBase:"./dist",
       open:true
    },

    module:{
        rules:[
          {
              test :/\.css$/,
              exclude:"/node_modules/",
            //   loaders:"style-loader!css-loader"
              use:[
                  {
                      loader:cssExtract.loader,
                    //   options:{
                    //       injectType:"lazySingletonStyleTag"
                    //   }
                  },
                  {
                      loader:"css-loader",
                      options: { importLoaders: 1 }
                  },
                  "postcss-loader"
              ]
          },
          {
              test:/\.scss$/,
              use:[
                 {
                      loader:cssExtract.loader,
                 },
                 {
                      loader:"css-loader"
                 },
                 {
                      loader :"postcss-loader",
                 },
                 {
                     loader:"sass-loader"
                 }
              ]
          },
          {
              test:/\.(png|jpg|gif)$/,
              loader:"url-loader",
              options:{
                  limit:300,
                  outputPath:"images/",
                  name:"[name]_[hash:5].[ext]",
                  publicPath:"http://127.0.0.1:8081/images/"
              }
          },
          {
              test:/\.js$/,
              loader:"babel-loader",
               query:{
                   presets:[
                       "@babel/preset-env",
                       "@babel/preset-react"
                   ] 
                }
          }

        ]
    } ,
    
     
}