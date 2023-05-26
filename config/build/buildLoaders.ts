import { BuildOptions } from './types/config';
import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin' 


const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader", //заменил на MiniCssExtractPlugin (создает файл css в build)
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            // модульные классы только в файлах scss с '.module.'
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // наименование классов при dev / prod сборке
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }
  
  // Если не используем typescript = нужен babel-loader
	const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

	return [ typescriptLoader, cssLoader ]
}

export default buildLoaders