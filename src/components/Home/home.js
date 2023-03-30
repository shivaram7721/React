import styles from './home.module.css';
import { NavBar } from '../NavBar/navBar';

export function Home() {


    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.text}>
                    <span className={styles.textOne}>Sale 20% Off</span>
                    <span className={styles.textTwo}>On Everything</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque facere quos excepturi. Similique veniam est impedit itaque. Fuga ducimus commodi culpa quam aperiam laudantium beatae odio et corrupti libero!</p>
                </div>
                    
                <div className={styles.imgContainer}>
                    <img src='https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=' alt='shopping'/>
                </div>
            </div>
        </div>
    );
}