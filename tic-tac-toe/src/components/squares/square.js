import styles from "./square.module.css";

export function Square({value, onSquareClick}) {

  return (
    <div>
      <button className={styles.square} onClick={onSquareClick}>{value}</button>
    </div>
  );
}
