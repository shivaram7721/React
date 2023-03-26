import './App.css';
import { Register } from './Components/Register/register';
import { Login } from './Components/Login/login';
import { useState } from 'react';

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => (
    setCurrentForm(formName)
  );

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
