import styles from "./aboutUs.module.css";
import { NavBar } from "../NavBar/navBar";

export function AboutUs() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>ABOUT US</h1>
      </div>
      <div className={styles.textContainer}>
        <p>
          At envy cart, all that you see is hand-picked and 100% true sourced
          straight from the best brands and their approved affiliates from US
          and over the world, only for you. We present to you the most up to
          date its in-season and on-incline; if it's on the racks, it's on the
          web. Also, it's nowest have it conveyed ASAP to you, from a store
          close you, when you utilize our Phygital services. Its New and Now
          Barely a year from dispatch, envy cart is as of now in the Top 20, and
          one of the quickest developing, web based business organizations in
          the nation. Offering adaptability in the manner in which you shop,
          envy cart is a first-of-its-kind Phygital commercial center that
          serves more than one million clients. The voyage starts on the web.
          Draw in with us in a consistent shopping knowledge crosswise over work
          area, tablet and cell phone. Peruse the best US and universal brands
          crosswise over garments and frill (watches, sacks, shoes, adornments
          and then some), devices and home machines.
        </p>
      </div>
    </div>
  );
}
