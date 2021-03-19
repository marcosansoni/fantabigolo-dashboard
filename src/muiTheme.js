import { createMuiTheme } from '@material-ui/core';
import Theme from './assets/Theme';
import Color from './assets/Color';

const muiTheme = (themeMode) => {
  const theme = Theme[themeMode];

  return createMuiTheme({
    palette: {
      // primary1Color: '#188C9E',
      // primary2Color: '#1fbfbc',
      // accent1Color: '#62625E',
      // accent2Color: '#c0d890',
      primary: {
        main: theme[Color.PRIMARY_DARK],
        light: theme[Color.PRIMARY_LIGHT],
        dark: theme[Color.PRIMARY_DARK],
        // contrastText: theme[Color.PRIMARY_DARK],
      },
      // secondary: {
      // main: theme[Color.PRIMARY_DARK],
      // light: colors.tiffany200,
      // dark: colors.tiffany400,
      // contrastText: colors.white,
      // },
    },
    typography: {
      fontFamily: 'Poppins, Arial',
      // button: {
      //   textTransform: 'none',
      // },
    },
    // overrides: {
    //   MuiButton: {
    //     // Name of the styleSheet
    //     containedSizeLarge: {
    //       padding: '12px 65px',
    //       fontFamily: 'Campton-book',
    //     },
    //     root: {
    //       fontFamily: 'Campton-book',
    //     },
    //
    //   },
    // },
    // MuiList: {
    //   root: {
    //     overflow: 'auto',
    //   },
    // },
  });
};

export default muiTheme;
