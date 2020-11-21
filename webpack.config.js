const path = require('path')

/* Plugins */
const HtmlWP = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractP = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  mode: devMode ? 'development' : 'production',
  output: {
    filename: 'src/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        },
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: 'all',
          minSize: 0
        }
      }
    }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(t|j)sx?$/i,
        exclude: /node_modules/
      },
      {
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractP.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        test: /\.s(c|a)ss$/
      }
    ]
  },
  devServer: {
    open: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWP({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractP({
      filename: 'styles/[name].[chunkhash].css'
    }),
    new Dotenv()
  ]
}
