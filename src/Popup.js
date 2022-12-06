import React from "react";

import styles from "./popup.module.css";

const Popup = (props) => {
  return(
    <div className={styles.popupSection}>
      <div className={styles.popupBox}>
        <div className={styles.popupText}>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, mauris vitae gravida pellentesque, nisl ex lobortis arcu, eget convallis urna magna a mi. Curabitur eu dolor feugiat, elementum nisl et, accumsan dui. Ut auctor rutrum lacinia. Morbi in arcu nisl. Cras quam odio, pharetra id magna in, viverra aliquet mauris. Mauris malesuada at nisl a tempor. Donec eu neque non urna placerat maximus a quis diam. Ut cursus mauris at tempus auctor.</p>
        </div>
        <button className={styles.closingButton} onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
};

export default Popup;