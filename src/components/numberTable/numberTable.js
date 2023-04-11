import { useState } from "react";
import styles from "./numberTable.module.css";

export function NumberTable() {
  const [number, setNumber] = useState([7]);

  function handleClick() {
    setNumber([...number, Math.floor(Math.random() * 100)]);
  }

  return (
    <div>
      <div>
        {/* <h1>Number: {number}</h1> */}
        <button className={styles.btn} onClick={handleClick}>
          Add Number
        </button>
      </div>

      <div>
        <table className={styles.table}>
          <tr>
            <th className={styles.tableHead}>Numbers</th>
          </tr>
          {number.map((number) => (
            <tr>
              <td className={styles.tableData}>{number}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
