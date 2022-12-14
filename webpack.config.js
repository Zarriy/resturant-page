const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    mainPage: "./src/mainPage.js",
    menuPage: "./src/menu.js",
    contact: "./src/contact.js",
    footer: "./src/footer.js",
    header: "./src/header.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
