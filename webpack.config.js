// const path = require('path');
 
//  module.exports = {
//      mode:'none',
//     entry:  './src/index.js',
//     output: {
//         filename: 'build.js',
//         path: path.resolve(__dirname)},
//     module:{
//        rules:[{
//            test: /\.js$/,
//            exclude: /node_modules/,
//            loader: 'babel-loader'
//         }]
//     },
//     devServer:{
//         contentBase : path.resolve(__dirname),
//         historyApiFallback:true
//     }
//  }


const merge = require('webpack-merge');
+ const common = require('./webpack.common.js');
+
+ module.exports = merge(common, {
+   mode: 'production',
+ });