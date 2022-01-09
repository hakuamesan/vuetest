
module.exports = {
  root: true,
  env: {
    node: true,	
    'vue/setup-compiler-macros': true,	  
  },
  parser: "vue-eslint-parser",
  parserOptions: {
  	parser: "@typescript-eslint/parser",
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',	  
    'plugin:jest/recommended',
    'prettier',	 
  ],
overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}

