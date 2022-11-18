import { Link, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Homepage } from './pages/homepage';
import theme from '../assets/theme';
import CssBaseline from '@mui/material/CssBaseline';


export function App() {
  return (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={<Homepage/>}
        />
        <Route
          path="/page-2"
          element={<div></div>
            // <div><Link to="/">Click here to go back to root page.</Link></div>
          }
        />
      </Routes>
    </ThemeProvider>;
  </>);

}


export default App;
