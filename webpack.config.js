const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
//const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  // -------------
  entry: "./main.ts",
  // -------------
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  // -------------
  mode: "development",
  // -------------
  // watchOptions: {
  //   ignored: /node_modules/
  // },
  // // -------------
  // watch: true,
  resolve: {
    // alias: {
    //   vue$: "vue/dist/vue.esm-browser.js"
    // },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  // -------------
  module: {
    rules: [
      //   {
      //     test: /\.vue$/,
      //     loader: "vue-loader"
      //   },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        type: "json"
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]"
        }
      }
    ]
  },
  // -------------
  plugins: [
    //new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets"
        },
        {
          from: "data",
          to: "data"
        }
      ]
    }),

    new HtmlPlugin({
      template: "index.html",
      title: "Development"
    })
  ]
}
