import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.ec_container}>
      <span className={styles.green_rectangle}></span>
      <span className={styles.red_triangle}></span>
      <span className={styles.yellow_semicircle}></span>
      <span className={styles.yellow_dots}></span>
      <span className={styles.blue_circle_container}></span>
      <span className={styles.grey_rounded_rectangle}></span>
      <div className={styles.content}>
        <svg>
          <text>
            <textPath href="#text-path" startOffset="10%">
              <tspan dy="-30">E n o c k &nbsp; C h i k w a t a</tspan>
            </textPath>
          </text>
          <path id="text-path" />
        </svg>

        <p>Front-end Developer / Graphic Designer</p>

        <Link to="/work">
          <button type="button">Portfolio</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
