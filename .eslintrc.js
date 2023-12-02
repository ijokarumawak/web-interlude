module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    "next/core-web-vitals",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      'error',
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      JSON.parse(require('fs').readFileSync('.prettierrc', 'utf8')),
    ]
  },
}
