import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/home';
import { AboutUs } from './components/AboutUs/aboutUs';
import { Login } from './components/Login/login';
import { Register } from './components/Register/register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutUs' element={<AboutUs />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
