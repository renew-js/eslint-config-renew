'use strict';

module.exports = {
    rules: {
        'no-console': 0,
        'indent': [2, 4],
        'no-unused-vars': 1,
        'space-before-function-paren': [2, 'always'],
        'object-curly-spacing': [0, 'always'],
        'array-bracket-spacing': [0, 'always'],
        'require-jsdoc': [1, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true
            }
        }]
    }
};
