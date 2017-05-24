const { resolve } = require('path');
const webpack = require('webpack');
const { getIfUtils } = require('webpack-config-utils');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DashboardPluginConfig = new DashboardPlugin();
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});

let config = (env = {}) => {

	// Define common enivronment settings
	entryConfig = ["./index.js"];
	pluginsConfig = [HtmlWebpackPluginConfig];

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
	      }
			]
		},
		plugins: pluginsConfig
	}
}

module.exports = config;