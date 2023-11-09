module.exports = {
    env: {
        browser: true,
        es2021: true,
        mocha: true
    },
    ignorePatterns: [
        '*/node_modules/**/*'
    ],
    extends: 'standard',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '**/*.js'
            ],
            parserOptions: {
                sourceType: 'module'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module'
    },
    rules: {
        semi: 0,
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'prefer-const': 0,
        'n/handle-callback-err': 0
    }
};
