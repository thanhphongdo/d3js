const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // mode: 'production',
    target: 'web',
    devtool: '#source-map',
    entry: path.join(__dirname, "libs", "index.ts"),
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.jsx']
    },
    output: {
        path: path.join(__dirname, "public/javascripts/dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
};