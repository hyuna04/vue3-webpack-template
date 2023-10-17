module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        //vue
        //'plugin:vue/vue3-essential', //Lv1
        'plugin:vue/vue3-strongly-recommended', //Lv2
        //'plugin:vue/vue3-recommended', //Lv3
        //js
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        //extends 부분에 적용하고 있는 rule이 있다면 따로 적용하지 않아도 됨.
        //해당하는 규칙은 변경해야하는 상황 등.. 에 작성할 수 있음.
        //우리 입맛대로 수정 할 수 있음.
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-selt-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "always",
            "component": "always"
        }]
    }
}