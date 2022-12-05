import React, { useEffect, useState } from "react";

import styles from "./promoCode.module.css";

const PromoCode = () => {

  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText('12345');
    setCopied(true);
 
    const timer = setTimeout(() => {setCopied(false)}, 2000);
    return () => clearTimeout(timer);
  };
  
 return(
    <div className={styles.promoCodeContainer}>
      <p>Get now a promo code!</p>
      <div className={styles.promoBox}>
        <p>12345</p>
        <button onClick={copyHandler}>Copy promo code</button>  
      </div>
      {copied && <p className={styles.copiedSuccess}>Promo code copied!</p>}
    </div>
  )
};

export default PromoCode;