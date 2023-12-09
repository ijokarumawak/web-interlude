import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: ['20px', '24px'],
      base: ['24px', '30px'],
      lg: ['28px', '34px'],
      xl: ['32px', '38px'],
      '2xl': ['36px', '44px'],
      '3xl': ['40px', '48px'],
    }
  },
  plugins: [],
}
export default config
