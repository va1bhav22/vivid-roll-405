import React from "react";
import styles from "./payment.module.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import ProductFooter from "../Components/ProductFooter";
const Otp = () => {
    const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
   const timer =
   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
   return () => clearInterval(timer);
   }, [counter]);

   const handleReset = () => {
   setCounter(59) 
  };
  const [OTP, setOTP] = React.useState("");
 const handleVr =()=>{
    if((OTP)){
        alert("purchase succesfull");

        
      }else{
        alert("fill the all OTP")
        
      }
 }

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
        <div >
        <OTPInput className={styles.A5}
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={4}
      otpType="number"
      disabled={false}
      secure
    />
    </div>
        <div className={styles.A6}><button onClick={handleVr}>VERIFY</button></div>
        <div className={styles.A7}> Resend OTP in<span style={{color:"green",fontWeight:"bold"}}> 00:{counter}</span></div>
        <div className={styles.A8}><button onClick={handleReset}>Resend OTP</button></div>
    </div>
   </div>
   </div>
      <ProductFooter/>
   </div>
    )
}
export default Otp;