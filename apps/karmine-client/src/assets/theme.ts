import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00D8EC',
    },
    secondary: {
      main: '#FFF',
    },
    background: {
      default: '#102337'
    }
  },
});

export default theme;
// export const theme = () => {
//   return {
//     background: '#102337',
//     primary: '#00D8EC'
//   }
// }