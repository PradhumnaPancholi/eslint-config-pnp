const { rules } = require("eslint-config-prettier");

module.exports = {
    plugins:['react'],
    extends: [
        'eslint:recommended',// catches common problems in JS//
        'plugin:react/recommended', // fixes react problems//
        'plugin:react-hooks/recommended', // fixes react-hooks problems//
        'plugin:jsx-a11y/recommended', //this fixes accessibility problems//
        'plugin:prettier/recommended', //this formats codes with common rules//
        'prettier/react' //to tell prettier that we use react
    ],
    parser: 'babel-eslint', 
    settings: {
        react: {
            version: 'detect' //auto detects version of react in given project//
        }
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module', //use import/export//
        ecmaFeatures: {
            jsx: true, //use jsx//
        }
    },
    // these are passed to prettier//
    rules: {
        'prettier/prettier' : [
            'error',
            {
                semi: false,
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
                jsxSingleQuote: false,
                trailingComma: 'none',
                arrowParens: 'avoid',
            }
        ]
    }
}