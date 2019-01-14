'use strict';

module.exports = {
    rules: {
        'no-console': 0,
        'indent': [2, 4],
        'no-unused-vars': 0,
        'space-before-function-paren': [0, 'always'],
        'require-jsdoc': [1, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true,
            }
        }],
    },
};
