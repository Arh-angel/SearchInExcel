module.exports = {
	root: true,
	ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react-hooks/recommended",
		"plugin:conarti-fsd/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"no-console": "warn",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{ checksVoidReturn: { attributes: false } },
		],
	},
};
