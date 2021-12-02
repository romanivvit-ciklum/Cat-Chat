module.exports =
{
    env: {
    es6: true
},
    extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
],
    globals: {
        atob: 'readonly',
        btoa: 'readonly',
        document: 'readonly',
        globalThis: false,
        sessionStorage: 'readonly',
        window: 'writable',
},
    parser: "@typescript-eslint/parser",
    parserOptions: {
    ecmaFeatures: {
        "jsx": true
    },
    ecmaVersion: 2018,
        sourceType: "module"
},
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-namespace": 0,
        "arrow-parens": ["error", "always"],
        "import/extensions": [
        2,
        "ignorePackages",
        {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
        }
    ],
        "import/no-extraneous-dependencies": ["error", {
        "devDependencies": [
            "**/*.test.js",
            "**/*.spec.js"
        ]
    }],
        "import/prefer-default-export": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "linebreak-style": 0,
        "newline-before-return": 1,
        "no-bitwise": 1,
        "no-console": 1,
        "no-param-reassign": [2, { "props": false }],
        "no-shadow": 1,
        "no-use-before-define": 0,
        "padding-line-between-statements": [2,
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    ],
        "quotes": [1, "single"],
        "react/prop-types": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, "first"],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "react/jsx-props-no-spreading": 0,
        "react/prefer-stateless-function": 1,
        "react-hooks/exhaustive-deps": 2
},
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    }
}

