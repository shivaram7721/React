import './App.css';
import { CardOne } from './components/cardOne.js';
import { CardTwo } from './components/cardTwo.js';

function App() {

  const userOne = {
    name :'Amit',
    image : 'https://images.pexels.com/photos/5428678/pexels-photo-5428678.jpeg?auto=compress&cs=tinysrgb&w=600',
    designation : 'Graphic Designer',
    description : 'Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design'
  }

  const userTwo = {
    name :'Ruhi',
    image : 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    designation : 'Singer',
    description : 'perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups'
  }

  return (
    <div className="App">
      <CardOne {...userOne}/>
      <CardTwo {...userTwo}/>
    </div>
  );
}

export default App;
