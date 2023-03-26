import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const ref = useRef('')

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 100) {
      setText(newText);
    }
  };

  const handleClear = () => (
    ref.current.value=''
  );

  return (
    <div className="App">
      <textarea
      ref={ref}
        onChange={handleChange}
        placeholder="Enter the text..."
        rows="10"
        cols="50"
        maxlength="100"
      ></textarea>
      <p value={text}>
        {text.length}/{100} characters
      </p>
      <button onClick={handleClear}>clear</button>
    </div>
  );
}

export default App;
