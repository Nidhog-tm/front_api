module.exports = {
    mode: 'development',
    entry: [
        '@babel/polyfill','./src/js/app.js'
    ],
    output: {
        path: __dirname + '/assets/js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            }
        }]
    }
};