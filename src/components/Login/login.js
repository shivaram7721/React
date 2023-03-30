import styles from "./login.module.css";
import { useState } from "react";
import { NavBar } from "../NavBar/navBar";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 style={{ textDecoration: "underline", color: "Black" }}>Login here</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="youremail@gmail.com"
            required
          />
          <label for="pwd">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="pwd"
            placeholder="********"
            required
          />
          <button type="submit">Log In</button>
        </form>
        {/* <button
          className={styles.linkBtn}
          onClick={() => props.onFormSwitch("register")}
        >
          Dont't have an account? Register here.
        </button> */}
      </div>
      </div>
    </>
  );
};
