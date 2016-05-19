const path = require('path');
const webpack = require('webpack');

const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: {
		src: PATHS.src
	},
	resolve: {
		extensions: ['', '.js']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loaders: ['style', 'css'],
			include: PATHS.src
		}, {
			test: /\.js$/,
			loader: 'babel',
			include: PATHS.src,
			exclude: /node_modules/
		}]
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: PATHS.build,

		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,

		// display only errors to reduce the amount of output
		stats: 'errors-only',

		// parse host and port from env so this is easy
		// to customize
		host: process.env.HOST,
		port: process.env.PORT
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
