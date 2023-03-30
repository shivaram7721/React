import { useState } from "react";
import { NavBar } from "../NavBar/navBar";
import styles from './register.module.css';

export const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName,lastName,email,password);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <NavBar />
    <div className={styles.container}>
    <div className={styles.formContainer}>
      <h2 style={{textDecoration : "underline", color : "Black"}}>Register here</h2>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label for="firstName">Firstname</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          placeholder="Firstname"
          required
        />
        <label for="LastName">lastname</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="lastName"
          placeholder="lastname"
        />
        <label for="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="youremail@gmail.com"
          id="email"
          required
        />
        <label for="pwd">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="********"
          id="pwd"
          required
        />
        <button type="submit">Register</button>
      </form>
      {/* <button className={styles.linkBtn} onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button> */}
    </div>
    </div>
    </>
  );
}