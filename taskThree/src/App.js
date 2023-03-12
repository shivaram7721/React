import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Amit');

  const nameChange = () => {
    setName(name === 'Amit' ? 'Rajan' : 'Amit');
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={nameChange}>Change Name</button>
    </div>
  );
}

export default App;
