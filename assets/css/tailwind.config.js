const themeDir = __dirname + '/../../';

module.exports = {
  important: true,
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      themeDir + 'layouts/**/*.html',
      themeDir + 'exampleSite/content/**/*.html',
      'layouts/**/*.html',
      'content/**/*.html',
    ],
  },
  theme: {
      /* margin: {
       '0': '0px',
       '1': '8px',
       '2': '12px',
       '3': '16px',
       '4': '20px',
       '5': '32px',
       '6': '52px',
       '7': '85px',
      }, */
    fontSize: {
      'xs': '.8rem',
      'sm': '1rem',
      'base': '1.1rem',
      'lg': '1.563rem',
      'xl': '1.953rem',
      '2xl': '2.441rem',
      '3xl': '3.052rem',
      '4xl': '3.815rem',
      '5xl': '4.768rem',
      '6xl': '5.96rem',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['Lora', 'Merriweather', 'Noto Serif SC', 'serif'],
      'mono': ['Trispace', 'monospace', 'SFMono-Regular', 'Menlo'],
    },
    extend: {
      height: {
          '(screen-16)': 'calc(100vh - 4rem)',
          '(16-4px)': 'calc(4rem - 4px)',
          '96': '24rem',
          '128': '32rem',
          '160': '40rem',
      },
      minHeight: {
        '16': '4rem',
      },
      maxHeight: {
        'doc-sidebar': 'calc(100vh - 4rem - var(--height-doc-title, 4rem))',
      },
      lineHeight: {
        '(16-4px)': 'calc(4rem - 4px)',
      },
      inset: {
        '16': '4rem',
        '32': '8rem',
        '48': '12rem',
      },
      padding: {
        'scrollbar': 'calc(100vw - 100%)',
      },
      colors: {
        'eureka': 'var(--color-eureka)',
        'primary-bg': 'var(--color-primary-bg)',
        'secondary-bg': 'var(--color-secondary-bg)',
        'tertiary-bg': 'var(--color-tertiary-bg)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'tertiary-text': 'var(--color-tertiary-text)',
      }
    }
  },
  variants: {},
  plugins: []
}
