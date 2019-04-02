const path = require('path');

module.exports = {
	entry: './dist/renderer/react/client.js',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'react.bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	target: 'web',
	mode: 'development'
};
