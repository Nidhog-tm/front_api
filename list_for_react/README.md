# react 設定

## reactをインストール

npm install react react-dom

## APIと連携するためにaxiosもインストール

npm install axios

## react build 設定

### webpack インストール

```bash
npm install --save-dev webpack
```

### build パッケージインストール

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/polyfill
```

### CSS loader インストール

```bash
npm i -D style-loader css-loader
```

### webpack.config.js 設定内容

```js
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
    }
};
```
