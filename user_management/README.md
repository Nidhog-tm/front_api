## インストール

### package.json 作成

```bash
npm init -y
```

### package

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader \
        webpack webpack-cli webpack-dev-server \
        react react-dom \
        react-router react-router-dom
```

### CSS loader

```bash
npm i -D style-loader css-loader
```

### React Router

React の環境が完成したら次はreact-router 関連のパッケージをインストールします。

```bash
npm install --save-dev react-router react-router-dom

```

### @babel/polyfill

```bash
npm install @babel/polyfill --save-dev
```

## 事前設定

package.json のscripts にstart コマンドでwebpack-dev-server が起動するように設定します。

```package.json
"scripts": {
    "start": "webpack-dev-server --content-base src --mode development --inline",    // <- 追加
    ......
  },
```

## Web サーバを起動

```bash
npm start
```