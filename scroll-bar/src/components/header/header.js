import styles from "./header.module.css";

export function Header() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerHead}>Know your mentors</h2>
        <p className={styles.headerPara}>
          Work with a mentor(senior data scientiste from top companies) who
          colsely looks at your progress, gives you personalised feedbacks and
          helps you fill gaps in your knowledge
        </p>
      </div>
    </div>
  );
}
