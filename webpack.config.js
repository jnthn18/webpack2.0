const { resolve } = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DashboardPluginConfig = new DashboardPlugin();
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPluginConfig = new ExtractTextPlugin('[name].bundle.css');

let config = (env = {}) => {

	const WebpackPluginConfig = new webpack.DefinePlugin({
	  // Definitions...
	  __DEV__: JSON.stringify(env.production === undefined)
	})

	// Define common enivronment settings
	entryConfig = ["./index.js", "./scss/main.scss"];
	pluginsConfig = [HtmlWebpackPluginConfig, ExtractTextPluginConfig, WebpackPluginConfig];

	if (env.production === undefined) {
		// Add Dev Environment Config
		entryConfig = [
			...entryConfig,
			"webpack-dev-server/client?http://localhost:8080"
		]
		
		pluginsConfig = [
			...pluginsConfig,
			DashboardPluginConfig
		]
	}
	
	return { context: resolve(__dirname, 'src'),
		entry: entryConfig,
		output: {
			filename: 'bundle.js',
			path: resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{ test: /\.(js|jsx)$/,
	        exclude: [
	          resolve(__dirname, "node_modules")
	        ],
	        loader: "babel-loader"
	      },
	      { 
	        test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	        	use: "css-loader"
	        })
	      },
	      { 
	        test: /\.(sass|scss)$/,
	        use: ExtractTextPlugin.extract({
	        	use: ['css-loader', 'sass-loader']
	        })
	      }
			]
		},
		plugins: pluginsConfig
	}
}

module.exports = config;