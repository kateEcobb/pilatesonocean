
import "@fontsource/sen"
import { createTheme } from '@mui/material/styles'

const colors = {
  one: '#22223b',
  two: '#4a4e69',
  three: '#9a8c98',
  four: '#c9ada7',
  five: '#f2e9e4'
}
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Sen',
      'Arial'
    ].join(',')
  },
  palette: {
    primary: {
      main: colors.one,
    },
    secondary: {
      main: colors.three,
    },
    text: {
      primary: colors.one,
      secondary: colors.two,
    },
    background: {
      default: colors.five
    },
  },
})

export default theme
