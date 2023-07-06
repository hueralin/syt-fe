module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential'
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
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'vue'
	],
	'rules': {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		// 单行注释前后加空格
		'spaced-comment': ['error', 'always'],
		// 成行的代码块，前后要加空格
		'block-spacing': ['error', 'always'],
		// 不允许有连续的空格
		'no-multi-spaces': 'error',
		// 不允许行尾有空格，空行不算
		'no-trailing-spaces': 'error',
		// 属性之前不允许有空格
		'no-whitespace-before-property': 'error',
		// 块前空格
		'space-before-blocks': 'error',
		// 大括号前后空格
		'object-curly-spacing': ['error', 'always', { 'arraysInObjects': true }],
		// 从一个包的导入不允许书写多次，需手动修复
		'no-duplicate-imports': 'error',
		// 箭头函数的空格
		'arrow-spacing': ['error', { 'before': true, 'after': true }],
		// 关闭 vue 组件的多单词命名规则
		'vue/multi-word-component-names': 'off',
		// 必要时可以使用 @ts-xxx 指令关闭严格的校验
		'@typescript-eslint/ban-ts-comment': 'off'
	}
}
