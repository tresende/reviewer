export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    smallRadius: '0.4rem',
    mediumRadius: '0.8rem',
    default: '1px solid'
  },
  font: {
    family: "'Open Sans',sans-serif,'Helvetica Neue',Helvetica,Arial",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#FABA40',
    yellow: '#FAAF40',
    black: '#222222',
    white: '#FFFFFF',
    gray100: '#EEEEEE',
    gray200: '#F6F6F6',
    gray300: '#D8D8D8',
    gray400: '#CCCCCC',
    gray450: '#7D7D7D',
    gray500: '#4b4b4b',
    gray600: '#4A4A4A'
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '7.6rem',
    huge: '14rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
