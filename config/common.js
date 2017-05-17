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
 },
  resolve: {
    modules: [
      paths.app,
      "node_modules"
    ],
    alias: {
      sources: paths.app,
      resources: paths.resources,
      assets: paths.assets,
      components: path.resolve(paths.app, "components"),
      pages: path.resolve(paths.app, "pages"),
      views: path.resolve(paths.app, "views"),
      store: path.resolve(paths.app, "store", "store"),
      constants: path.resolve(paths.resources, "constants"),
    },
    extensions: [".js"]
  },
   performance: {
	    maxAssetSize: 10000000,
	    maxEntrypointSize: 10000000,
	    hints: "warning",
  },
  
  module: {
	    rules: [
	      {
	        test: /\.js?$/,
	        exclude: /node_modules/,
	        loader: "babel-loader",
	        query: {
// presets: ["es2015", "react", "stage-0"],
// plugins: ['transform-runtime']
	        	  "presets": [
	        		    "react",
	        		    "latest"
	        		  ],
	        		  "plugins": [
	        		    "transform-export-extensions",
	        		    "transform-class-properties",
	        		    ["transform-object-rest-spread", { "useBuiltIns": true }],
	        		    ["transform-regenerator", {
	        		      "async": false
	        		    }],
	        		    ["transform-runtime", {
	        		      "helpers": false,
	        		      "polyfill": false,
	        		      "regenerator": true
	        		    }]
	        		  ]
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
