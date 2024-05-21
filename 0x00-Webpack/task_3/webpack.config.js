const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		header: path.resolve(__dirname, './modules/header/header.js'),
		body: path.resolve(__dirname, './modules/body/body.js'),
		footer: path.resolve(__dirname, './modules/footer/footer.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	performance: {
		maxAssetSize: 1000000,
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|svg|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				use: [
					{
						loader: ['file-loader', 'image-webpack-loader'],
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 8564,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Web Pack App',
			template: './public/index.html',
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](jquery|lodash)[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
};
