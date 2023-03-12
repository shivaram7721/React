import './App.css';
import { useState } from 'react';

function App() {

const [counter, setCounter] = useState(0);

const IncrementCounter = () => {
  setCounter(counter + 1);
}

const DecrementCounter = () => {
  (counter > 0) ? setCounter(counter - 1) : setCounter(counter);
}

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button class="btnOne" onClick={IncrementCounter}>Increment</button>
      <button class="btnTwo" onClick={DecrementCounter}>Decrement</button>
    </div>
  );
}

export default App;
