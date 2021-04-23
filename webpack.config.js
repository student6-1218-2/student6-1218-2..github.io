// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: '[name].bundle.js',  // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack About",
            template: __dirname + "/src/news.html",
            inject: 'body',
            filename: "news.html"
        }),
        new HtmlWebpackPlugin({
            title: "Webpack About",
            template: __dirname + "/src/photo.html",
            inject: 'body',
            filename: "photo.html"
        }),
        new HtmlWebpackPlugin({
            title: "Webpack About",
            template: __dirname + "/src/rozklad.html",
            inject: 'body',
            filename: "rozklad.html"
        }),
        new HtmlWebpackPlugin({
            title: "Webpack About",
            template: __dirname + "/src/index.html",
            inject: 'body',
            filename: "index.html"
        }),

        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};
