import './App.css';
import { ComponentOne } from './ComponentOne';
import { ComponentTwo } from './ComponentTwo';
import { ComponentThree } from './ComponentThree';
import { ComponentFour } from './ComponentFour';

function App() {
  return (
    <div className="App">
      <h1>I am heading one ...from first component</h1>
      <h2>I am heading two ...from second component</h2>
      <h3>I am heading three ...from third component</h3>
      <button>Click Me !!</button>

      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
    </div>
  );
}

export default App;
