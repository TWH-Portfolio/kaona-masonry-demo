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
          deep: 'hsl(var(--background))',
          mid: 'hsl(var(--card))',
          light: 'hsl(var(--secondary))',
        },
        brass: {
          DEFAULT: 'hsl(var(--accent))',
          dim: 'hsl(var(--accent) / 0.6)',
        },
        bone: 'hsl(var(--foreground))',
        rust: 'hsl(var(--accent))',
        concrete: 'hsl(var(--muted-foreground))',
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
