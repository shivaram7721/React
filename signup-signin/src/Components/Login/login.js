import { useState } from "react";
import './login.css';

export const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('')
    setPassword('')
  };

  return (
    <div className="form-container">
        <h2 style={{textDecoration : "underline", color : "white"}}>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
      <button className="link-btn" onClick={ () => props.onFormSwitch('register')}>Dont't have an account? Register here.</button>
    </div>
  );
}
