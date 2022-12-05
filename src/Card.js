import React from "react";

import desk from "./img/desk.jpg";

import styles from "./card.module.css";

const Card = () => {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <img src={desk} alt="desk with laptop and notebook" />
        </div>
      </div>
    </div>
  )
};

export default Card;