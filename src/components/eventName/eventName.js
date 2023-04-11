import { useState } from "react";
import styles from "./eventName.module.css";

export function EventName() {
  const [logs, setLogs] = useState([]);

  let timeStamp = new Date().toLocaleString();

  function handleOver() {
    const events = {
      time: timeStamp,
      eventName: "mouse over",
    };
    setLogs([...logs, events]);
    console.log("over");
  }

  function handleOut() {
    const events = {
      time: timeStamp,
      eventName: "mouse out",
    };
    setLogs([...logs, events]);
    console.log("out");
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.headOne} onMouseOver={handleOver} onMouseOut={handleOut}>
          Heading 1
        </h1>
        <h2 onMouseOver={handleOver} onMouseOut={handleOut}>
          Heading 2
        </h2>

        <div onMouseOver={handleOver} onMouseOut={handleOut}>
          <p>this is div</p>
        </div>
      </div>

      <table className={styles.table}>
        <tr>
          <th className={styles.tableHead}>time</th>
          <th className={styles.tableHead}>event name</th>
        </tr>
        {logs.map((log) => (
          <tr>
            <td className={styles.tableHead}>{log.time}</td>
            <td className={styles.tableHead}>{log.eventName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
