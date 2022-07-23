import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { CartContext } from "../CartContext/CartContext";
import styles from "./payment.module.css";
import ProductFooter from "../Components/ProductFooter";
import { useSelector } from "react-redux";

export default function CardPayment() {
      // const {total}=useContext(CartContext);
      const total_amount = useSelector(
            (state) => state.cartReducer.total_amount
      );
      const navigate = useNavigate();
      const [user, setUser] = useState({
            cardnumber: "",
            month: "",
            year: "",
            carsholder: "",
            cvv: "",
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setUser({
                  ...user,
                  [name]: value,
            });
      };

      const purchase = () => {
            const { cardnumber, month, year, cardholder, cvv } = user;
            if (cardnumber && month && year && cardholder && cvv) {
                  navigate("/otp");
            } else {
                  alert("fill the all details");
            }
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
                              <p>ENTER YOUR CARD DETAILS</p>

                              <div className="card-details-container">
                                    <img
                                          class="img"
                                          src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
                                          alt=""
                                    />
                                    <form action="" className="card-detail">
                                          <input
                                                type="number"
                                                name="cardnumber"
                                                value={user.cardnumber}
                                                onChange={handleChange}
                                                placeholder="CARD NUMBER"
                                          />
                                          <input
                                                type="month"
                                                name="month"
                                                value={user.month}
                                                onChange={handleChange}
                                                placeholder="MONTH"
                                          />
                                          <input
                                                type="number"
                                                name="year"
                                                value={user.year}
                                                onChange={handleChange}
                                                placeholder="YEAR"
                                          />
                                          <br />
                                          <input
                                                type="text"
                                                className="card-holder-input"
                                                name="cardholder"
                                                value={user.cardholder}
                                                onChange={handleChange}
                                                placeholder="CARD HOLDER"
                                          />
                                          <input
                                                type="text"
                                                name="cvv"
                                                value={user.cvv}
                                                onChange={handleChange}
                                                placeholder="CVV2 SECURITY CODE"
                                          />
                                    </form>
                              </div>
                        </div>
                  </div>
                  <div className={styles.Box4}>
                        <div className={styles.mini3}>
                              <div className="price">
                                    TOTAL : ₹ <span>{total_amount}</span>
                              </div>
                        </div>
                        <div className={styles.mini4}>
                              <button onClick={purchase}>CONTINUE</button>
                        </div>
                  </div>
                  <ProductFooter />
            </div>
      );
}
