const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '400px',
      xxl: '2000px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        secondary: 'inter, sans-serif',
        title: 'Montserrat, sans-serif'
      },
      colors: {
        primary: '#142560',
        white: '#E1F0FC',
        blue: {
          500: '#0B0080'
        },
        gray: {
          100: '#C2E0F8',
          500: '#242424',
          700: '#0D1418'
        }
      },
      backgroundImage: {
        hero: 'url(https://res.cloudinary.com/devjoseronaldo/image/upload/v1676129287/getingoxy/bg-hero_rqzcsb.png)',
        heroMobile:
          'url(https://res.cloudinary.com/devjoseronaldo/image/upload/v1676132253/getingoxy/bg-hero-mobile_liyqqt.png)',
        contact:
          'url(https://res.cloudinary.com/devjoseronaldo/image/upload/v1673808066/getingoxy/bg-contact_lsoed3.png)'
      }
    }
  }
}
