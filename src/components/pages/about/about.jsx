import React from "react";
import styles from "./about.module.css";

import Enock from "../../../assets/Enock.png";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.col}>
        <h2>About Me</h2>
        <div>
          <iframe
            title="about me"
            src="https://www.youtube.com/embed/Z-NrCR2T2sw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <button type="button" style={{ marginTop: "2rem" }}>
            <a href="https://drive.google.com/file/d/1KqX9xXrp_Jzw8obSLDswGaM7OQbjDLK6/view?usp=sharing">
              <i className={styles.download}></i> Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <img src={Enock} alt="Enock Chikwata" />
      </div>
    </div>
  );
}

export default About;
