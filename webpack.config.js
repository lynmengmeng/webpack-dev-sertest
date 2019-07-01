const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './app/index.js',
    output:{
        filename:"bundle.js",   //filename 用于输出文件的文件名。
        path: path.resolve(__dirname, './public'),   //目标输出目录 path 的绝对路径。__dirname
        // publicPath: path.resolve(__dirname, './public') //publicPath取决于你的网站根目录的位置，因为打包的文件都在网站根目录了，这些文件的引用都是基于该目录的。假设网站根目录为public，引用的图片路径是’./img.png’，如果publicPath为’/’，图片显示不了，因为图片都打包放在了dist中，那么你就要把publicPath设置为”/dist”
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 8888 // 想webpack-dev-server在端口8888启动
    },
    mode: 'production'
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 { loader: 'style-loader' },
    //                 { loader: 'css-loader' }
    //             ]
    //         },
    //         {
    //             test: /(\.jsx|\.js)$/,
    //             use: {
    //                 loader: "babel-loader",
    //                 options: {
    //                     presets: [
    //                         "env", "react"
    //                     ]
    //                 }
    //             },
    //             exclude: /node_modules/
    //         }
    //     ]
    // }
    // ,
    // plugins: [
    //     new webpack.BannerPlugin('版权所有，翻版必究'),
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname , './app/index.html')
    //     }),
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};
module.exports = config;