const colors = {
  primary: '#00897B', // Color for buttons or links
  primaryLight: '#00695C',
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
  white: 'white',
}

const transitions = {
  normal: '0.25s',
}

const fontSize = {
  small: '0.9rem',
}

const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px',
}

export default theme
