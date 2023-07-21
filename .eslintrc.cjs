module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['svelte', '@typescript-eslint', 'import'],
	ignorePatterns: ['*.cjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.eslint.json',
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser'
		}
	],
	settings: {
		"import/resolver": {
			node: {},
			typescript: {
				alwaysTryTypes: false
			}
		},
		"import/parsers": {
			"svelte-eslint-parser": [".svelte"],
			"@typescript-eslint/parser": [".ts"],
			"espree": [".js"]
		}
	},
	rules: {
		"import/export": "error",
		"import/extensions": [
			"warn",
			"never",
			{
				"svelte": "always",
				"json": "always",
				"md": "always",
				"svg": "always",
				"webp": "always",
				"png": "always"
			}
		],
		"import/no-absolute-path": [
			"error",
			{
				"esmodule": true,
				"commonjs": true,
				"amd": true
			}
		],
		"import/no-cycle": [
			"error",
			{
				"ignoreExternal": true
			}
		],
		"import/no-duplicates": [
			"warn",
			{
				"considerQueryString": true
			}
		],
		"import/no-dynamic-require": "error",
		"import/no-extraneous-dependencies": [
			"warn",
			{
				"devDependencies": true,
				"optionalDependencies": true,
				"peerDependencies": true,
				"bundledDependencies": true
			}
		],
		"import/no-named-as-default": "warn",
		"import/no-named-default": "warn",
		"import/no-self-import": "error",
		"import/no-unassigned-import": [
			"warn",
			{
				"allow": [
					"**/*.css",
					"**/*.scss"
				]
			}
		],
		"import/no-unresolved": [
			"warn",
			{
				"caseSensitive": true,
				"caseSensitiveStrict": true,
				"ignore": [
					"^\\$app/"
				]
			}
		],
		"import/no-useless-path-segments": [
			"warn",
			{
				"noUselessIndex": true
			}
		],
		"import/order": [
			"warn",
			{
				"groups": [
					"type",
					"builtin",
					"external",
					["parent", "sibling", "index", "internal"],
					"object"
				],
				"pathGroups": [
					{
						"pattern": "$app/**",
						"group": "external",
						"position": "before"
					},
					{
						"pattern": "**/*.svelte",
						"group": "internal",
						"position": "after"
					}
				],
				"alphabetize": {
					"order": "asc",
					"caseInsensitive": true
				},
				"warnOnUnassignedImports": false,
				"newlines-between": "never"
			}
		],
		"import/unambiguous": "warn"
	}
};
