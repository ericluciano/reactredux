const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: './app.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public',
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.styl'],
		alias: {
			modules: __dirname + '/node_modules',
			jquery: 'modules/jquery/dist/jquery.min.js',
			bootstrap: 'modules/bootstrap/dist/js/bootstrap.js'
		}
	},
	plugins: [
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery'
	}),

	//production
	new webpack.DefinePlugin({
	  'process.env': {
	    NODE_ENV: JSON.stringify('production')
	  }
	}),
	//new webpack.optimize.UglifyJsPlugin(),
	//fproduction

	new ExtractTextPlugin('app.css')
	],
	module: {
		loaders: [{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader','stylus-loader')
		}, {
			test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
			loader: 'file'
		},{
			test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'
		},{
  		test: /\.(png|jpg|.gif)$/,
		  loader: 'url-loader'
		}]
	}
}
