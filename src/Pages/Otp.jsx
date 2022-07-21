import React from "react";
import styles from "./payment.module.css";

const Otp = () => {
    const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
   const timer =
   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
   return () => clearInterval(timer);
   }, [counter]);

    return(
        <div>
            <div className={styles.Box}>
   <div className={styles.Box1}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="" />
    <p>HELP</p>
   </div>
   <div className={styles.A1}>
    <div>
        <div className={styles.A2}>
            <img src="https://www.nicepng.com/png/full/333-3331029_lock-icon-facebook.png" alt="" />
        </div>
        <div className={styles.A3}>Payment</div>
        <div className={styles.A4}>Enter OTP Sent to your mobile number</div>
        <div className={styles.A5}><input placeholder="Enter 4 Digit OTP" /></div>
        <div className={styles.A6}><button>VERIFY</button></div>
        <div className={styles.A7}> Resend OTP in<span style={{color:"green",fontWeight:"bold"}}> 00:{counter}</span></div>
        <div className={styles.A8}>Resend OTP hii</div>
    </div>
   </div>
   </div>
      
   </div>
    )
}
export default Otp;