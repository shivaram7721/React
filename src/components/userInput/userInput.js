import { useState, useEffect, useRef } from "react";
import styles from "./userInput.module.css";

export function UserInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState([]);
  const updateRef = useRef(null);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleClick() {
    let users = {
      id: Date.now(),
      name: name,
      email: email,
      number: number,
    };
    setDetails([...details, users]);
    setName("");
    setEmail("");
    setNumber("");
  }

  function handleDelete(id) {
    setDetails(details.filter((item) => item.id !== id));
  }

  function handleUpdate(id) {
    let updatedUser = { name, email, number };
    let newUser = [...details];
    newUser[id] = updatedUser;
    setDetails(newUser);
    setName("");
    setEmail("");
    setNumber("");
    updateRef.current.focus();
  }

  useEffect(() => {
    updateRef.current.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.form}>
          
          <input
            value={name}
            ref={updateRef}
            onChange={handleName}
            placeholder="Name"
            type="text"
          />
          <input value={email} onChange={handleEmail} type="email" placeholder="email" />
          <input value={number} onChange={handleNumber} type="tel" placeholder="mobile"/>
          <button className={styles.inputBtn} onClick={handleClick}>Add details</button>
        </div>

        <div className={styles.liveInput}>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h3>Mobile: {number}</h3>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              {/* <th>delete</th>
              <th>update</th> */}
            </tr>
          </thead>

          <tbody>
            {details.map((user, index) => (
              <tr className={styles.tableRow} key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td className={styles.delete} onClick={() => handleDelete(user.id)}>delete</td>
                <td className={styles.update} onClick={() => handleUpdate(index)}>update</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
