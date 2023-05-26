import { WebpackPluginInstance, ProgressPlugin } from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildPaths } from './types/config';


const buildPlugins = ({ html }:BuildPaths):WebpackPluginInstance[] => {
	return [
		new HtmlWebpackPlugin({
			template: html
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	]
}

export default buildPlugins