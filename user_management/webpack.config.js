var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, "src"),
    entry: ['@babel/polyfill', "./js/index.js"],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }]
        },
        {
            test: /\.css$/,
            use: [
                {
                loader: "style-loader"
                },
                {
                loader: "css-loader",
                }
            ]
        }
    ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js",
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
