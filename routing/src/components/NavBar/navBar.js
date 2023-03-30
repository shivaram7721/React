import styles from "./navBar.module.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className={styles.container}>
        
        <div className={styles.name}><span>Shopping</span></div>

      <div className={styles.navContainer}>

        <NavLink className={styles.navbar} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navbar} to="/AboutUs">
          AboutUs
        </NavLink>
        <NavLink className={styles.navbar} to="/Login">
          Login
        </NavLink>
        <NavLink className={styles.navbar} to="/Register">
          register
        </NavLink>
        
      </div>

    </div>
  );
}
