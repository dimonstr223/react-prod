module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'i18next'
	],
	'rules': {
		'indent': ['error','tab'],
		'linebreak-style': ['error','windows'],
		'quotes': ['error','single'],
		'semi': ['error','never'],
		'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
		'import/no-unresolved': 'off',
		'import/prepare-default-export': 'off',
		'no-unused-vars': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading' : 'warn',
		'no-shadow': 'off',
		'import/extentions': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': ['error', { markupOnly: true }],
		'max-len': ['error', { code: 120, ignoreComments: true }]
	},
	globals: {
		__IS_DEV__: true,
	}
}
