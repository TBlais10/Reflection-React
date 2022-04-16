import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './Routers/AppRouter';
import {AuthProvider} from './Providers/AuthProvider'

function App() {
  return (
   <BrowserRouter>
    <AuthProvider>
        {/* Main router*/}
        {/* Home page router*/}
        {/* Sign up router*/}
        {/* Sign in router*/}
        {/* Journal Entry router*/}
      <AppRouter />
    </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
