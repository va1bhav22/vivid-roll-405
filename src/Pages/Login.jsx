import { position } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../Redux/AuthProvider/action";
import { LOGIN_SUCCESS } from "../Redux/AuthProvider/actionTypes";
import styles from "../Styled/login.module.css";
import Register from "./Register";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      const params = {
        username,
        password,
      };
      dispatch(login(params)).then((r) => {
        if (r === LOGIN_SUCCESS) {
          console.log("login", location);
          if (location.state) {
            navigate(`${location?.state?.from?.pathname}`, { replace: true });
          } else {
            navigate("/in", { replace: true });
          }
        } else {
          alert("invalid Crenditials");
          console.log("invalid Crenditials");
        }
      });
    }
  };
     const gotoReg=()=>{
       navigate("/signup")
     }
  return (
    <div className={styles.loginCon}>
      <div className={styles.logsec}>
        <p className={styles.heading}>LOG IN</p>
      
         
          <input
            className={styles.inputText}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="E-MAIL"
            required
          />
        
       
        
         
          <input
            className={styles.inputText}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="PASSWORD"
            required
          />
          <p>HAVE YOU FORGOTTEN YOUR PASSWORD</p>
       
        <div className={styles.btnDiv}>
          <input
            className={styles.submitBtn}
            onClick={handleLogin}
            type="submit"
            value="LOG IN"
          />
        </div>
      </div>
      <div className={styles.regdesc}>
        <div>
          <h3>REGISTER</h3>
          <p>
            IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO
            ACCESS THE REGISTRATION FORM.
            <br />
            <br />
            BY GIVING US YOUR DETAILS, PURCHASING IN ZARA.COM WILL BE FASTER AND
            AN ENJOYABLE EXPERIENCE.
          </p>
        </div>
        <div>
                <button onClick={gotoReg}>CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
