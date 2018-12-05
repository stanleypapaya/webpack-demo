const path = require('path')
module.exports = {
    entry: './app/index.js',  
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
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
          },
          {
            test: /\.(css|scss|sass)$/,
            use: ['style-loader', 'fast-css-loader', 'fast-sass-loader']
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  context: '',
                  emitFile: false,
                  publicPath: 'build/images'
            
                }
              }
            ]
              
            
          }
        ]
      }
}