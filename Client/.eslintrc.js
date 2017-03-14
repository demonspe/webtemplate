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
    "plugin:unicorn/recommended"
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
    "unicorn",
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
    "brace-style": [
      "error",
      "stroustrup",
      {
        "allowSingleLine": true
      }
    ],
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
    "eqeqeq": ["error", "smart"],
    "prefer-arrow-callback": ["error"],
    "rest-spread-spacing": ["error", "never"],
    // ECMAScript 6
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "no-var": "error",
    // Import
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/export": "error",
    "import/no-absolute-path": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-mutable-exports": "error",
    "import/imports-first": "error",
    "import/no-deprecated": "error",
    "import/order": "error",
    "import/newline-after-import": "error",
    "import/no-named-default": "error",
    // unicorn
    "unicorn/catch-error-name": "off",
    // flowtype
    "flowtype/boolean-style": ["error", "boolean"],
    "flowtype/define-flow-type": "error",
    "flowtype/delimiter-dangle": ["error", "only-multiline"],
    "flowtype/generic-spacing": "error",
    "flowtype/require-parameter-type": ["error", {
      "excludeArrowFunctions": true
    }],
    "flowtype/require-return-type": ["error", "always", {
      "excludeArrowFunctions": true
    }],
    "flowtype/require-valid-file-annotation": ["error", "always"],
    "flowtype/space-before-generic-bracket": "error",
    "flowtype/semi": "error",
    "flowtype/union-intersection-spacing": "error",
    "flowtype/valid-syntax": "error",
    "flowtype/use-flow-type": "error",
    "flowtype/object-type-delimiter": ["error", "comma"],
    // react
    "react/display-name": "off",
    "react/no-children-prop": "error",
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],
    "react/no-did-update-set-state": ["error", "disallow-in-func"],
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "error",
    "react/style-prop-object": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never"
    }],
    "react/void-dom-elements-no-children": "error"
  }
};
