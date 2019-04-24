 const path = require("path")
 const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
    //   publicPath: '/',
      filename: 'index-bundle.js'
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
        },
        {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html"
        })
      ]
    // devtool: 'inline-source-map',
    
  };