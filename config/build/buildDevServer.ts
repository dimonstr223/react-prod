import { BuildOptions } from './types/config'
import { Configuration as DevServerConfig } from 'webpack-dev-server'

const buildDevServer = ({ port }:BuildOptions):DevServerConfig => {
	return {
		port,
		open: true,
		historyApiFallback: true,
		hot: true
	}
}

export default buildDevServer