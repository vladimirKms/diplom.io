const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { dirname } = require('path');
var isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devServer: {
        open: 'Firefox'
      },
    
    
    
      module: {
        rules: [
            
            
                { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: { loader: "babel-loader" } 
			 },
                 {
            test: /\.css$/,
            use:  [
                (isDev ? 'style-loader' :
                MiniCssExtractPlugin.loader), 
                {loader:'css-loader',
                options: {
                 importLoaders: 2
                }
                }, 
                'postcss-loader']
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/i,
                    loader: 'file-loader?name=./vendor/[name].[ext]'
                },
    
             {
            test: /\.(png|jpg|gif|ico|svg)$/i,
            use: ['file-loader?name=./images/[name].[ext]',             
            {
                                    loader: 'image-webpack-loader',
                                    options: {
                                    esModule: false,
                                                               
                                    },   
                            },
                    ]
             },

            
            ]
        },
        plugins: [ 
            new MiniCssExtractPlugin({
               
                filename: 'index.[contenthash].css',}),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                        preset: ['default'],
                },
                canPrint: true,
        }),  
           new HtmlWebpackPlugin({
                inject: false, 
                template: './src/index.html',
                filename: 'index.html', 
                minify:
                    false,
                filename: 'index.html' 

              }),
              new HtmlWebpackPlugin({
                inject: false, 
                template: './src/about_project/index.html',
                filename: 'index.html', 
                minify:
                    false,
                filename: 'index_about.html' 

              }),
         
              new HtmlWebpackPlugin({
                inject: false, 
                template: './src/analyzer/index.html',
                filename: 'index.html', 
                minify:
                    false,
                filename: 'index_analyzer.html' 

              }),


              new WebpackMd5Hash(),
              new webpack.DefinePlugin({
                  'NODE_ENV':JSON.stringify(process.env.NODE_ENV)

              }),
            ],
     
};  
