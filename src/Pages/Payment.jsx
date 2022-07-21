import React from 'react'
import { Navigate } from 'react-router-dom';
import CardPayment from './CardPayment';
import styles from "./payment.module.css";
const Payment = () => {
    // const history=useNavigate()
    const handleCon=()=>{
        Navigate(<CardPayment/>)
    }

  return (
    <div>
    <div className={styles.Box}>
       <div className={styles.Box1}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="" />
        <p>HELP</p>
       </div>
       <div className={styles.Box2}>
        <p>CHOOSE A PAYMENT METHOD</p>
        <div className={styles.minibox}>
         <p>Please note that only cards that use 3D Secure are accepted. Contact your bank to activate it or for further instructions.</p>   
        </div>
       </div>
       <div className={styles.Box3}>
        <div className={styles.mini1}>
            <img src="https://logotyp.us/files/visa.svg" alt="" />
            <p>VISA</p>
        </div>
        <div className={styles.mini2}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="" />
            <p>MASTERCARD</p>
        </div>
       </div>
    </div>
    <div className={styles.Box4}>
        <div className={styles.mini3}>
            
        </div>
        <div className={styles.mini4}>
            <button onClick={handleCon}>CONTINUE</button>
        </div>
    </div>
    </div>
  )
}

export default Payment