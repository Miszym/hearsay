const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
   },
   devServer: {
      stats: 'minimal',
      overlay: true,
      historyApiFallback: true,
      disableHostCheck: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      https: false,
   },
   module: {
      rules: [
         {
            test: /\.(jsx?)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /(\.s?css)$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /(\.jpg|\.gif)$/,
            use: ['file-loader'],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
   ],
};
