import React, { useState } from "react";

import PromoCode from "./PromoCode";
import Popup from "./Popup";

import { AiOutlineArrowRight } from "react-icons/ai";

import desk from "./img/desk.jpg";

import styles from "./card.module.css";

const Card = () => {

  const [showPopup, setShowPopup] = useState(false);

  const closePopupHandler = () => {
    setShowPopup(false)
  };

  const popupHandler = () => {
    setShowPopup(true)
  };

  return(
    <>
    {showPopup && <Popup onClose={closePopupHandler}/>}
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        <div className={styles.imgBox}>
          <img src={desk} alt="desk with laptop and notebook" />
        </div>
        <div className={styles.textBox}>
          <h1>Noteworthy technology acquisitions 2021</h1>
          <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        <PromoCode />
        <button className={styles.readMoreButton} onClick={popupHandler}>Read more <AiOutlineArrowRight className={styles.arrow}/></button>
      </div>
    </div>
    </>
  )
};

export default Card;