import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './Routers/AppRouter';

function App() {
  return (
   <BrowserRouter>
    {/* Main router*/}
    {/* Home page router*/}
    {/* Sign up router*/}
    {/* Sign in router*/}
    {/* Journal Entry router*/}
   <AppRouter />
   </BrowserRouter>
  );
}

export default App;
