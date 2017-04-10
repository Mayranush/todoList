const webpack = require('webpack');
const path = require("path");


const paths = require("./paths");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3030;
// const ADAPTER = process.env.ADAPTER || "0.0.0.0";

module.exports = {
  // entry: [
  //   "react-hot-loader/patch"
  // ],
    entry: [
    "react-hot-loader"
  ],
  output: {
    publicPath: `http://${HOST}:${PORT}/`,
  },
  devtool: "source-map",
  devServer: {
    contentBase: paths.dist,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: PORT,
    // host: ADAPTER,
    stats: "errors-only",
    noInfo: false,
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [


      {
        test: /\.s?css$/,
        loader: "style!css!sass",

      },

      {
        test: /\.css$/,
        loader: "style!css",

        include: [
          path.resolve(__dirname, '/node_modules/slick-carousel/slick'),

        ],
      },

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};