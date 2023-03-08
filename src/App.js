import './App.css';
import { ComponentOne } from './componentOne.js';
import { ComponentTwo } from './componentTwo.js';
import { ComponentThree } from './componentThree.js';
import { ComponentFour } from './componentFour.js';


function App() {
  return (
    <div className="App">
        {/* Challenge - 1
        <h1>I am heading one ...from first component</h1>
        <h2>I am heading two ...from second component</h2>
        <h3>I am heading three ...from third component</h3>
        <button>Click Me !!</button> */}

        {/* Challege - 2 */}
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
    </div>
  );
}

export default App;
