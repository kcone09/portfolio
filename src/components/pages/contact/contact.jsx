import React from "react";
import styles from "./contact.module.css";

import {
  FaWhatsapp,
  FaRegEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaSkype,
  FaLocationArrow,
} from "react-icons/fa";

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.contact_container}>
        <div className={styles.overflow_hidden}>
          <span className={styles.green_oval}></span>
          <span className={styles.red_oval}></span>
          <span className={styles.yellow_oval}></span>
          <span className={styles.blue_oval}></span>
          <span className={styles.orange_oval}></span>
          <div className={styles.wave1}></div>
          <div className={styles.wave2}></div>
        </div>

        <div className={styles.contact_content}>
          <p>
            <FaRegEnvelope /> echikwata06@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> 084 524 7648 or 061 474 1431
          </p>
          <p>
            <FaWhatsapp /> 061 474 1431
          </p>
          <p>
            <FaFacebookF /> https://www.facebook.com/photostop09
          </p>
          <p>
            <FaSkype /> enock.chikwata
          </p>
          <p>
            <FaLocationArrow /> Rugby, Milnerton, Cape Town
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
