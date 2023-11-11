module.exports = {
  overrides: [
    {
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "tsconfig.json",
        sourceType: "module",
        extraFileExtensions: [".astro"],
      },
      // plugins: ['import', 'notice'],
      extends: ["plugin:astro/recommended"],
      root: true,
      env: {
        node: true,
        "astro/astro": true,
        es2020: true,
        jest: true,
      },
      ignorePatterns: [".eslintrc.js"],
      rules: {
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
        "import/newline-after-import": [
          "error",
          {
            count: 1,
          },
        ],
        "import/order": [
          "error",
          {
            "newlines-between": "never",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            prev: "*",
            next: "return",
          },
          {
            blankLine: "always",
            prev: "*",
            next: "if",
          },
        ],
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        "prettier/prettier": "off",
      },
    },
  ],
};
