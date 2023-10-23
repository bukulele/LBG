const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    videosBlock: './src/components/videosBlock.js',
    modelsBlock: './src/components/modelsBlock.js',
    sliderBlock: './src/components/sliderBlock.js',
    timerBlock: './src/components/timerBlock.js',
    videosPage: './src/videosPage.js',
    videosBlockPage: './src/components/videosBlockPage.js',
    modelsPage: './src/modelsPage.js',
    modelsBlockPage: './src/components/modelsBlockPage.js',
    videoPage: './src/videoPage.js',
    picturesBlock: './src/components/picturesBlock.js',
    modelPage: './src/modelPage.js',
    modelPicturesBlock: './src/components/modelPicturesBlock.js',
    allNewsPage: './src/allNewsPage.js',
    newsBlock: './src/components/newsBlock.js',
    oneNewsPage: './src/oneNewsPage.js',
    oneNewsBlock: './src/components/oneNewsBlock.js',
    termsPage: './src/termsPage.js',
    authorizationPage: './src/authorizationPage.js',
    authBlock: './src/components/authBlock.js',
    writeUsPage: './src/writeUsPage.js',
    writeUsBlock: './src/components/writeUsBlock.js',
    restorePasswordPage: './src/restorePasswordPage.js',
    createPasswordPage: './src/createPasswordPage.js',
    profileSettingsPage: './src/profileSettingsPage.js',
    tourPage: './src/tourPage.js',
    tourBlock: './src/components/tourBlock.js',
    buyAccessPage: './src/buyAccessPage.js',
    videosBlockModelPage: './src/components/videosBlockModelPage.js'
  }, // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory
    filename: '[name].bundle.js', // The bundled JavaScript file
    publicPath: './dist/'
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
      },
      {
        test: /\.(mov|avi|mp4|webM|ogg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name][ext]'
        }
      }
    ]
  }
};
