
//https://github.com/shivaram7721/React (github repo link)

import './App.css';
import {ComponentOne} from './componentOne'
import {ComponentTwo} from './componentTwo'
import {ComponentThree} from './componentThree'

function App() {

  const heading = "Register here ...";
  const btnText = "Submit";

  return (
    <div className="App">
      {/* Challenge-1
      <h1>{heading}</h1>
      <input type="text" placeholder='mobile ...'/>
      <br/><br/>
      <input type="password" placeholder='password ...'/>
      <br/><br/>
      <button>{btnText}</button> */}

      {/* Challenge-2 */}
      <ComponentOne heading={heading}/>
      <ComponentTwo />
      <ComponentThree btnText={btnText}/>

    </div>
  );
}

export default App;
