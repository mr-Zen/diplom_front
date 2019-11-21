// webpack.config.js
const webpack = require('webpack');
const path = require('path');
// подключаем path к конфигу вебпак
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: { main: './src/index.js',
        analytics: './src/analytics.js',
        client: './src/client.js'
            },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{ 
            test: /\.js$/, 
            use: { loader: "babel-loader" }, 
            exclude: /node_modules/ 
                },
                {
                    test: /\.css$/i, 
                    use: [isDev ? 'style-loader' : {
                       loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                         },
                    }, 
                    
                    'css-loader', 'postcss-loader'] 
                
                    
                },
                {
                    test: /\.(png|jpg|gif|ico|svg)$/,
                    use: [
                         'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                         {
                             loader: 'image-webpack-loader',
                             options: {
                                 bypassOnDebug: true, // webpack@1.x
                                 disable: true, // webpack@2.x and newer
                                
                              }
                         },
                    ],
                    },
                    {
                        test: /\.(eot|ttf|woff|woff2)$/,
                        loader: 'file-loader?name=./vendor/[name].[ext]'
                        }
                
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: './css/[name].[contenthash].css',
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                        preset: ['default'],
                },
                canPrint: true
           }),
            new HtmlWebpackPlugin({ 
                inject: false,
                template: './src/index.html',
                filename: 'index.html',
                chunks: ['main']
            }),
            new HtmlWebpackPlugin({ 
                inject: false,
                template: './src/analytics.html',
                filename: 'analytics.html',
                chunks: ['analytics']
            }),
            new HtmlWebpackPlugin({ 
                inject: false,
                template: './src/client.html',
                filename: 'client.html',
                chunks: ['client']
            }),
            new WebpackMd5Hash(),
            
            new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
   })
        ],
        
    devServer: {
        contentBase: path.join(__dirname, './dist')
      }
}
