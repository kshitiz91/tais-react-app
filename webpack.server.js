const path = require('path');
const webpackNodeExternal = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
	target : 'node',
	entry: ['babel-polyfill','./server/index.js'],
	output:{
		filename : 'server.js',
		path: path.resolve(__dirname,'dist'),
		publicPath: '/',
	},
	module: {
		rules:[
			{
				test:/\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				options: {
					presets: [
						'react',
						'stage-0',
						['env',{
							target:{ browsers: ['last 2 versions']}
						}]
					]
				}
			},
			{
				test: /\.scss$/,
				use: [
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.svg$/,
				use: [
					'file-loader'
				]
			},
			{

				test: /\.png|jpg|gif$/,
				use: [{
					loader: 'url-loader',
					options: {
						name: '[path][name]-[hash:8].[ext]'
					}
				}]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'server.style.css',
		})
	],
	externals: [webpackNodeExternal()]
}
