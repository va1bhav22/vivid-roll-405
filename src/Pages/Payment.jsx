import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import CardPayment from "./CardPayment";
import styles from "./payment.module.css";
import ProductFooter from "../Components/ProductFooter";
import { border } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Payment = () => {
      const [toggle, setToggle] = useState(false);
      const navigate =useNavigate()
      const total_amount = useSelector((state)=> state.cartReducer.total_amount);
      const handleCon = () => {
            if (!toggle) {
                  alert("Plaese Choose Payment method");
            }
            else{
                navigate("/cardpayment")
            }
      };
      const Visa = () => {
            setToggle(toggle ? false : true);
      };

      return (
            <div>
                  <div className={styles.Box}>
                        <div className={styles.Box1}>
                              <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                                    alt=""
                              />
                              <p>HELP</p>
                        </div>
                        <div className={styles.Box2}>
                              <p>CHOOSE A PAYMENT METHOD</p>
                              <div className={styles.minibox}>
                                    <p>
                                          Please note that only cards that use
                                          3D Secure are accepted. Contact your
                                          bank to activate it or for further
                                          instructions.
                                    </p>
                              </div>
                        </div>
                        <div className={styles.Box3}>
                              <button onClick={Visa}>
                                    <div
                                          className={
                                                toggle
                                                      ? styles.mini1b
                                                      : styles.mini1
                                          }
                                    >
                                          <img
                                                src="https://logotyp.us/files/visa.svg"
                                                alt=""
                                          />
                                          <p>VISA</p>
                                    </div>
                              </button>
                              <div className={styles.mini2}>
                                    <img
                                          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                                          alt=""
                                    />
                                    <p>MASTERCARD</p>
                              </div>
                        </div>
                  </div>
                  <div className={styles.Box4}>
                        <div className={styles.mini3}>
                            Total : {total_amount}
                        </div>
                        <div className={styles.mini4}>
                              <button onClick={handleCon}>CONTINUE</button>
                        </div>
                  </div>
                  <ProductFooter />
            </div>
      );
};

export default Payment;
