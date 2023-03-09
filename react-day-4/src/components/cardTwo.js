export function CardTwo(props) {
  return (
    <div className="container">
      <div className="card Two">
        <img src={props.image} alt="cardTwo" />
        <h3>{props.designation}</h3>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
