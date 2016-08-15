const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/main.js'
    ]
  },
  output: {
    path: './public/built',
    publicPath: 'http://localhost:8080/built',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './public',
    publicPath: 'http://localhost:8080/built'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    // Webpack gives IDs to identify your modules
    new webpack.optimize.OccurrenceOrderPlugin(),

    // Hot reload upon file change
    new webpack.HotModuleReplacementPlugin(),

    // Won't allow Webpack to build if there are errors
    new webpack.NoErrorsPlugin()
  ],
};
