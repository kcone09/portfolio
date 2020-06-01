import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/ec-logo.png";

class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    const logoStyle = {
      width: "5%",
      paddingBottom: "100px",
    };
    return (
      <div className={styles.overlay}>
        {/* Button to close the overlay navigation */}
        <a
          href="#"
          className={styles.closebtn}
          onClose={e => {
            this.onClose(e);
          }}
        >
          &times;
        </a>

        {/* Overlay content */}
        <div className={styles.overlayContent}>
          <img src={Logo} alt="logo" style={logoStyle} />
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Modal;
