const { resolve } = require("path");
module.exports = {
  entry: [
      './components/hello-world.component.ts',
      './components/hello-world-input.component.ts'
  ],
  output: {
    filename: "helloworld.js",
    path: resolve(__dirname, "dist"),
    library: 'HelloWorld'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  mode: "production",
};
