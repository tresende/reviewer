export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem',
    default: '1px solid'
  },
  font: {
    family: "'Open Sans',sans-serif,'Helvetica Neue',Helvetica,Arial",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xxsmall: '0.7rem',
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
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    white: '#FFFFFF',
    yellow: '#FAAF40',
    gray100: '#EEEEEE;',
    gray500: '#4b4b4b;'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
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
