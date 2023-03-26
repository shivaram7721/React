import styles from "./section.module.css";

export function Section() {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <div className={styles.divContainer}>
          <span className={styles.spanOne}>TOTALLY FREE</span>

          <h1 className={styles.headOne}>
            <span className={styles.line}></span>
            Let's bring your team together in Onclick
          </h1>
          <p>We help you manage all of your work and daily task in office</p>
          <button className={styles.startedBtn}>Get Started</button>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="https://img.freepik.com/premium-photo/smiling-darkhaired-forty-year-old-man-yellow-tshirt-raising-right-hand-finger-pure-white-background_163068-954.jpg?w=740"
            alt="man"
          />
        </div>
        {/* <div className={styles.cardDiv}>
          <h3>Time Management</h3>
          <div className={styles.cardColor}></div>
        </div> */}
      </section>
    </div>
  );
}
