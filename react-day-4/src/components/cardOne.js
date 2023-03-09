export function CardOne(props) {
    
  return (
    <div className="container">
      <div className="card One">
        <img src={props.image} alt="cardOne"/>
        <h3>{props.designation}</h3>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
