import { BuildOptions } from './types/config'
import { ResolveOptions } from 'webpack'

const buildResolvers = (options: BuildOptions): ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {} 
	}
}

export default buildResolvers