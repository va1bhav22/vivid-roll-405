import React, { useState } from "react";
import styles from "../Styled/login.module.css";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <>
      <div styles={{ display: "flex" }}>
        <p className={styles.heading}>LOG IN</p>
        <div className={styles.input_wrap}>
          <br />
          <input
            className={styles.inputText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          />
          <label className={styles.label}>EMAIL</label>
        </div>
        <div className={styles.input_wrap}>
          <br />
          <input
            className={styles.inputText}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            required
          />
          <label className={styles.label}>PASSWORD</label>
        </div>
        <div className={styles.btnDiv}>
          <input className={styles.submitBtn} type="submit" value="LOG IN" />
        </div>
      </div>
      <div className={styles.regsec}>
        <div>
          <h3>Register</h3>
        </div>
        <div>
          <p>
            IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO
            ACCESS THE REGISTRATION FORM.
            <br /> 
            BY GIVING US YOUR DETAILS, PURCHASING
            IN ZARA.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.
          </p>
        </div>
        <div>
        <div className={styles.btnDiv}>
          <input className={styles.submitBtn} type="submit" value="REGISTER" />
        </div>     
        </div>
      </div>
    </>
  );
};

export default Login;
