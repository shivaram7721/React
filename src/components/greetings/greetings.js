import { useState } from "react";
import styles from './greetings.module.css';

export function Greetings() {

    const greets = ['Happy birthday', 'Aniversary', 'dasara', 'diwali', 'holi', 'ugadi', 'sankranti'];

    const [index, setIndex] = useState(0)
    const [greet, setGreet] = useState(greets[0])

    // console.log(greets.length);
    

    function handleGreets() {
        console.log(index)
        setGreet(greets[index+1])
        if(index>=greets.length) {
            setIndex(0)
            setGreet(greets[0])
        } else {
            setIndex(index+1)
        }
    }

    return (
        <div>
            <h1 className={styles.greetHead}>{greet}</h1>
            <hr/>
            <button className={styles.btn} onClick={handleGreets}>Greetings</button>
        </div>
    );
}