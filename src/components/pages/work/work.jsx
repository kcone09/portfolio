import React from "react";
import styles from "./work.module.css";
import {
  FaGlassCheers,
  FaClinicMedical,
  FaHandHoldingHeart,
  FaCloudSunRain,
  FaPhotoVideo,
} from "react-icons/fa";

function Work() {
  return (
    <div className={styles.work}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <p>
              <FaGlassCheers />
            </p>
            <a href="https://kcone09.github.io/cocktailApp/" target="_blank">
              <h3>The Perfect Cocktail</h3>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <p>
              <FaClinicMedical />
            </p>
            <a href="https://kcone09.github.io/covid_tracker/" target="_blank">
              <h3>Covid-19 Tracker</h3>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <p>
              <FaHandHoldingHeart />
            </p>
            <a href="https://kcone09.github.io/meditation/" target="_blank">
              <h3>Meditation App</h3>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <p>
              <FaCloudSunRain />
            </p>
            <a href="https://kcone09.github.io/weather/" target="_blank">
              <h3>Weather App</h3>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <p>
              <FaPhotoVideo />
            </p>
            <a href="https://kcone09.github.io/gallery/" target="_blank">
              <h3>Gallery</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;