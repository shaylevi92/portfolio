import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0A',
        'ink-2': '#1A1A17',
        paper: '#F2EFEA',
        'paper-2': '#E8E4DD',
        'paper-3': '#DCD6CC',
        fog: '#8A847B',
        'fog-2': '#B5AFA5',
        accent: '#D2552B',
        'accent-2': '#B84A1E',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        max: '1440px',
      },
    },
  },
  plugins: [],
}
export default config
