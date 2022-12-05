import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import desk from "./img/desk.jpg";

import styles from "./card.module.css";

const Card = () => {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <img src={desk} alt="desk with laptop and notebook" />
        </div>
        <div className={styles.textBox}>
          <h1>Noteworthy technology acquisitions 2021</h1>
          <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        <button>Read more <AiOutlineArrowRight className={styles.arrow}/></button>
      </div>
    </div>
  )
};

export default Card;