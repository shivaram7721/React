import styles from "./luckyNumber.module.css";
import { useRef } from "react";

export function LuckyNumber() {
  const ref = useRef(null);

  let lucky = 0;
  function handleChange(e) {
    lucky = ref.current.value;
    console.log(lucky);
  }

  let count = 0;

  function handleClick() {
    const num = Math.floor(Math.random() * 10 + 1);
    console.log(num)

    count = count + 1;

    if (lucky < num) {
      alert("you guessed a smaller number");
    } else if (lucky > num) {
      alert("you guessed a greater number");
    } else {
      alert(`you guessed the correct number in ${count} times`);
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Guess lucky number..."
        onChange={handleChange}
        ref={ref}
      />
      <button onClick={handleClick}>Match Number</button>
    </div>
  );
}
