import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// // Create a theme instance.
// const defaultTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#556cd6'
//     },
//     secondary: {
//       main: '#19857b'
//     },
//     error: {
//       main: red.A400
//     },
//     background: {
//       default: '#fff'
//     }
//   }
// })

const koreanTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
    button: {
      textTransform: 'none'
    }
  }
})

export default responsiveFontSizes(koreanTheme)
