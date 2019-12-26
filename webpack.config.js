module.exports = {
  watch: true,

  entry: './project/frontend/src/index.js',

  output:{
    filename: './project/frontend/static/frontend/main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};