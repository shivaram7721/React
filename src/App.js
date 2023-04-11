import './App.css';
import { Greetings } from './components/greetings/greetings';
import { EventName } from './components/eventName/eventName';
import { NumberTable } from './components/numberTable/numberTable';
import { GetPosts } from './components/getPosts/getPosts';
import { UserInput } from './components/userInput/userInput';

function App() {
  return (
    <div className="App">
      {/* <Greetings /> */}
      {/* <EventName /> */}
      {/* <NumberTable /> */}
      <GetPosts />
      {/* <UserInput /> */}
    </div>
  );
}

export default App;
