import styles from "./board.module.css";
import { Square } from "../squares/square";
import { useState } from "react";

export function Board() {

   const [squares, setSquares] = useState(Array(9).fill(null));
   const [xIsNext, setxIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || Winner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    setSquares(nextSquares);
    setxIsNext(!xIsNext)
  }

  const win = Winner(squares);
  let status;
  if (win) {
    status = "winner : " + win;
  } else {
    status = "Next player : " + (xIsNext ? "A" : "B");
  }

  function handleRestart() {
    setxIsNext(true);
    setSquares(Array(9).fill(null));
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
  }

  return (
    <div>
      {/* <div className={styles.status}>{status}</div> */}
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {/* <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> */}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className={styles.status}>{status}</div>

      <button className={styles.restart} onClick={handleRestart}>Restart Game!</button>
    </div>
  );
}


function Winner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
