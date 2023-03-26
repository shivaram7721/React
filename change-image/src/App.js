import React, { useState } from "react";
import './App.css';

function App() {
  const [image, setImage] = useState(
    "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
  );

  const imageurl = [
    "https://static.toiimg.com/photo/msid-88293744/88293744.jpg",
    "https://img.etimg.com/thumb/width-1200,height-900,imgsize-220108,resizemode-1,msid-69139809/magazines/panache/avengers-endgame-directors-tease-a-bright-future-for-captain-america.jpg",
    "https://images.news18.com/ibnlive/uploads/2017/01/hulk.jpg?im=FitAndFill,width=1200,height=900",
    "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-78080325/78080325.jpg",
    "https://im.indiatimes.in/content/2022/May/jpg-3_627cee1d4f486.jpeg?w=1200&h=900&cc=1",
    "https://img.etimg.com/thumb/width-1200,height-900,imgsize-640206,resizemode-1,msid-80880651/magazines/panache/disney-wants-to-release-scarlett-johansson-starrer-black-widow-in-theatres.jpg",
  ];

  const handleChangePic = () => {
    const newImageUrl = imageurl[Math.floor(Math.random() * imageurl.length)];
    setImage(newImageUrl);
  };

  return (
    <div className="App">
      <div className="img-container" >
        <img src={image} alt="placeholder" />
      </div>
      <div className="btn">
        <button onClick={handleChangePic}>Change Image</button>
      </div>
    </div>
  );
}

export default App;
