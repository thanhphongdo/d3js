const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
    if (env.NODE_ENV == 'development') {
        console.log('build DEVELOPMENT');
        return {
            mode: env.NODE_ENV,
            target: 'web',
            devtool: '#source-map',
            entry: path.join(__dirname, 'app', 'index.js'),
            module: {
                rules: [
                    {
                        test: /\.(js|ts)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    }
                ]
            },
            resolve: {
                extensions: ['*', '.js', '.ts']
            },
            output: {
                path: path.join(__dirname, 'public/javascripts/dist'),
                filename: 'bundle.js',
                publicPath: '/'
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ],
            devServer: {
                hot: true,
                historyApiFallback: true
            }
        }
    }
    else {
        console.log('build PRODUCTION');
        return {
            // mode: env.NODE_ENV,
            mode: 'development',
            target: 'web',
            devtool: '#source-map',
            entry: path.join(__dirname, 'lib', 'index.ts'),
            module: {
                rules: [
                    {
                        test: /\.(ts|tsx)?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                ],
            },
            resolve: {
                extensions: ['*', '.js', '.ts']
            },
            output: {
                path: path.join(__dirname, 'lib/dist'),
                filename: 'd3-basic-chart.min.js',
                publicPath: '/dist'
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 6,
                    },
                })
            ],
            devServer: {
                hot: true,
                historyApiFallback: true
            }
        }
    }
};