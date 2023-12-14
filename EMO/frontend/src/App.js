import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import Home from './components/Home/home';

import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Signup} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/home' Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
