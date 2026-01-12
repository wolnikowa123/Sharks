
export const theme = {
  colors: {
    navy: '#0A1F44',       // granat (z obrazka)
    teal: '#0F7C8F',       // niebieski/teal akcent
    silver: '#C0C0C0',     // srebrny
    silverDark: '#C2C2C0', // ciemniejszy srebrny
    black: '#000000',
    white: '#FFFFFF'
  },
  radius: {
    sm: '10px',
    md: '18px',
    lg: '28px',
    xl: '40px'
  },
  shadow: {
    soft: '0 6px 30px rgba(10,31,68,.15)',
    glow: '0 0 0 6px rgba(15,124,143,.15)'
  },
  layout: {
    maxWidth: '1100px'
  }
}
export type Theme = typeof theme
