import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        body: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        steel: {
          deep: 'hsl(220 45% 7%)',
          mid: 'hsl(220 40% 10%)',
          light: 'hsl(220 35% 14%)',
        },
        brass: {
          DEFAULT: 'hsl(38 85% 55%)',
          dim: 'hsl(38 60% 40%)',
        },
        bone: 'hsl(40 30% 92%)',
        rust: 'hsl(15 70% 50%)',
        concrete: 'hsl(40 8% 75%)',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
    },
  },
  plugins: [],
}

export default config
