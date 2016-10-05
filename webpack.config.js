var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    quiet: true, // lets WebpackDashboard do its thing
    entry: ["./src/app.js"],
    output: {
        path: __dirname + '/build/',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        port: 8081,
        contentBase: './build/'
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.ts', '.js']
    },
    externals: {
        "node-fetch": "fetch",
        "btoa": "btoa"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(    {compress: { warnings: false }}),
        new HtmlWebpackPlugin(),
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.json$/, loader: "json" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015']} },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
        ]
    },
    node: {
    }
};
