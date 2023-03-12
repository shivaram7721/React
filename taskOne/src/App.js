import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState([]);

  function handleNameChange(event) {
    setInput(event.target.value);
    //console.log(event.target.value);
  }

  function handleInput() {
    if (name) {
      setName([...name, input]);
      setInput("");
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={input} onChange={handleNameChange} />
        <button onClick={handleInput}>Add</button>
      </div>
      <ul>
        {name.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
