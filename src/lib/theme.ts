import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  },
});

export const cssVariables = {
  color: {
    contentbg: "#efefef",
    footerbg: "#1f1f1f",
  }
};

