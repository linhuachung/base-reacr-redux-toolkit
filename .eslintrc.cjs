module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
        'array-bracket-spacing': ['error', 'always'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'no-unused-vars': ['error', { 'varsIgnorePattern': 'React' }],
        'jsx-quotes': ['error', 'prefer-single'],
        'key-spacing': ['error', { 'afterColon': true }],
    },
}
