import React from "react";

import Modal from "./Modal";
import styles from "./style.module.css";

class Nav extends React.Component {
  state = { show: false };

  showModal = e => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <nav className={styles.mainNav} onClick={e => this.showModal(e)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>

        <Modal onClose={this.showModal} show={this.state.show} />
      </nav>
    );
  }
}

export default Nav;
