import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	prettierConfig,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			// No usar any
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unsafe-argument': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',

			// Comillas simples
			quotes: 'off',
			'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

			// Máximo 250 caracteres por línea
			'max-len': ['error', { code: 250, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],

			// Indentación de 8 espacios (tabs)
			indent: 'off',
			'@typescript-eslint/indent': ['error', 'tab'],

			// Otras reglas útiles
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'no-console': 'warn',
			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
		},
	},
	{
		ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/*.min.js'],
	}
);
