const webpack = require('webpack');
const path = require("path");


const paths = require("./paths");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3030;
const ADAPTER = process.env.ADAPTER || "localhost";

module.exports = {
   entry: [
     "react-hot-loader/patch"
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
    host: ADAPTER,
    stats: "errors-only",
    noInfo: false,
  },

  module: {
	    rules: [
	      // {
	      //   test: /\.js?$/,
	      //   loader: "eslint-loader",
	      //   options: {
	      //     emitWarning: true,
	      //   },
	      //   enforce: "pre",
	      //   exclude: /node_modules/,
	      // },
	      {
	        test: /\.s?css$/,
	        use: [{
	          loader: "style-loader",
	          options: {
	            sourceMap: true
	          }
	        }, {
	          loader: "css-loader",
	          options: {
	            sourceMap: true,
	            minimize: true,
	            autoprefixer: {
	              add: true,
	              browsers: ["last 3 versions"],
	            },
	          }
	        }, {
	          loader: "sass-loader",
	          options: {
	            sourceMap: true
	          }
	        }],
	      },
	    ],
	  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};