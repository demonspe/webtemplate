module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha" : true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:xo/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "import",
    "xo",
    "flowtype"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "rules": {
    // Possible Errors
    "no-console": "off",
    "valid-jsdoc": [
      "error",
      {
        "requireParamDescription": false,
        "requireReturnDescription": false,
        "requireReturnType": true,
        "requireReturn": false
      }
    ],
    // Best Practices
    "block-scoped-var": "error",
    "consistent-return": "error",
    "no-extra-bind": "error",
    "no-implicit-globals": "error",
    "no-multi-spaces": "error",
    "yoda": "error",
    // Stylistic Issues
    "block-spacing": "error",
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "singleValue": false,
        "objectsInArrays": false
      }
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "keyword-spacing": "error",
    "no-spaced-func": "error",
    "space-before-blocks": "error",
    "space-unary-ops": "error",
    // ECMAScript 6
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    // Import
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-mutable-exports": "error",
    "import/imports-first": "error",
    "import/order": "error",
    "import/newline-after-import": "error",
    // xo
    "xo/catch-error-name": "off",
    "eqeqeq": ["error", "smart"],
    "prefer-arrow-callback": ["error"],
    // flowtype
    "flowtype/boolean-style": ["error", "boolean"],
    "flowtype/delimiter-dangle": ["error", "only-multiline"],
    "flowtype/generic-spacing": "error",
    "flowtype/require-parameter-type": ["error", {
      "excludeArrowFunctions": true
    }],
    "flowtype/require-return-type": ["error", "always", {
      "excludeArrowFunctions": true
    }],
    "flowtype/require-valid-file-annotation": ["error", "always"],
    "flowtype/space-after-type-colon": "error",
    "flowtype/space-before-type-colon": "error",
    "flowtype/space-before-generic-bracket": "error",
    "flowtype/semi": "error",
    "flowtype/union-intersection-spacing": "error",
    "flowtype/valid-syntax": "error"
  }
};