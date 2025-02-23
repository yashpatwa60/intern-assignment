import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: {
        main: '#023047',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#edf2f4',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  });

  export default theme