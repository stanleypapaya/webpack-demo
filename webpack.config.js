const path = require('path')
module.exports = {
    entry: './app/index.js',  
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}