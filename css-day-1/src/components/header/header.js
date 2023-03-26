import styles from "./header.module.css";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from 'react-icons/rx'
import { useState } from "react";

export function Header() {

  const [toggle, setToggle] = useState(false);


  const change = () => (
    setToggle(!toggle)
  )


  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.headerDiv}>
          <span className={styles.appName}>Onclick</span>
          <span className={styles.line}></span>
          
          <button className={styles.headerBtn}>Home</button>
          <button className={styles.headerBtn}>Services</button>
          <button className={styles.headerBtn}>Contact</button>
          <button className={styles.headerBtn}>About us</button>
        </div>

        {/* <div className={styles.btn}>
        <button className={styles.headerBtn}>Login</button>
          <button className={styles.headerBtn}>Sign Up</button>
        </div>  */}


        
          <div className={styles.btn}>

          {toggle ?
              <div className={styles.collapse}>
                <p onClick={change}><RxCross2 /></p>
                <p>Home</p>
                <p>Services</p>
                <p>Contact</p>
                <p>About us</p>
              </div>  : 
              <span className={styles.hamBurger} onClick={change}><HiMenu /></span>
        }
        </div>
        
      </header>
    </div>
  );
}
