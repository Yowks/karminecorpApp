import { Link, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';


export function App() {

  return (
  <>
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
    </>);

}


export default App;
