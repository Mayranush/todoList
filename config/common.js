const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const paths = require("./paths");

module.exports = {
  entry: [
    require.resolve("./polyfills"),
    paths.app
  ],
  output: {
    path: paths.dist,
    filename: "[name].[hash:8].js"
    // filename: "[name].js"

  },
  resolve: {
    modules: [
      paths.app,
      "node_modules"
    ],
    alias: {
      sources: paths.app,
      // resources: paths.resources,
      assets: paths.assets,
      components: path.resolve(paths.app, "components"),
      pages: path.resolve(paths.app, "pages"),
      views: path.resolve(paths.app, "views"),
      store: path.resolve(paths.app, "store", "store"),
      // const: path.resolve(paths.resources, "const"),
    },
    extensions: [".js"]
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       loader: "babel-loader",
  //     },
  //     {
  //       test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
  //       loader: "url-loader",
  //       options: {
  //         limit: 10000,
  //         name: "assets/[name].[hash:8].[ext]"
  //       }
  //     },
  //   ]
  // },


  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"],
          plugins: ['transform-runtime']
          
        },
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }

    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: "DMPL",
      template: `${paths.app}/index.html`,
    })
  ]
};
