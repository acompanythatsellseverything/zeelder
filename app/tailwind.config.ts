import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light': '#eeeeee',
        'dark-light': '#484848',
        'accent': {
          DEFAULT: '#B10C10',
        },
        'accent-dark': {
          DEFAULT: '#740003',
        },
        'dark-bg': '#181818',
        'gray-light': '#ECECEC'
      },
      backgroundImage: {
        'logo': "url('../../public/zeelder-logo.svg')",
        'logo-icon': "url('../../public/logo.svg')",
        'article-1-bg': "url('../../public/slide-01-bg.png')",
        'divider-1-bg': "url('../../public/divider-bg.png')",
        'divider-1-cont': "url('../../public/divider-01.png')",
        'slide-4-bg': "url('../../public/slide-04-bg.svg')",
        'slide-10-bg': "url('../../public/slide-10-bg.png')",
      },

      backgroundSize: {
        '50': '50%',
        '20': '20%',
        '16': '4rem',
      },

      backgroundPosition: {
        'mob-right-center' : 'right 250px'
      },

      fontSize: {
        '3xl': ['2.5rem', {
          lineHeight: '48px',
          fontWeight: '700',
        }],
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            'primary': '#B10C10'
          },
        },
        dark: {
          // ...
          colors: {},
        },
        // ... custom themes
      },
    }),
  ],

};
export default config;
