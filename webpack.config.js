const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    videosBlock: './src/components/videosBlock.js',
    modelsBlock: './src/components/modelsBlock.js',
    sliderBlock: './src/components/sliderBlock.js'
  }, // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory
    filename: '[name].bundle.js', // The bundled JavaScript file
    publicPath: '/docs/'
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Process HTML files
        use: ['html-loader']
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  }
};
