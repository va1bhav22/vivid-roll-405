import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_total_amount_func } from "../Redux/CartProvider/action";
import {
      BigItemContainer,
      ChekoutButtonDiv,
      // ImageContainerDiv,
      // IndividualProductDiv,
} from "./styledcomponent";

const responsive = {
      desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
      },
};
const AddToCartBottom = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const cart = useSelector((state) => state.cartReducer.CartProduct);
      const [total, setTotal] = useState(0);
      useEffect(() => {
            var total_amount = 0;
            cart.map((item) => {
                  return (total_amount += item.Quantity * item.price);
            });
            setTotal(total_amount);
      }, [cart]);
      const handleContinue = () => {
            dispatch(get_total_amount_func(total));
            navigate("/address");
      };
      const moreProduct = useSelector((state) => state.cartReducer.moreProduct);
      return (
            <div>
                  <p style={{ textAlign: "left", marginLeft: "50px" }}>
                        COMPLETE YOUR LOOK
                  </p>
                  <BigItemContainer>
                        <Carousel responsive={responsive}>
                              {moreProduct.map((item) => {
                                    return (
                                          <div
                                                key={item.title}
                                                style={{
                                                      width: "300px",
                                                }}
                                          >
                                                <div>
                                                      <img
                                                            src={item.image}
                                                            style={{
                                                                  display: "block",
                                                                  width: "100%",
                                                            }}
                                                            alt={"addtocart"}
                                                      />
                                                </div>
                                                <div
                                                      style={{
                                                            fontSize: "12px",
                                                            textAlign: "left",
                                                      }}
                                                >
                                                      <p>{item.title}</p>
                                                      <p>{item.price}</p>
                                                      <p>{item.tag}</p>
                                                </div>
                                                <div
                                                      style={{
                                                            fontSize: "12px",
                                                            textAlign: "left",
                                                      }}
                                                >
                                                      <button
                                                            style={{
                                                                  padding: "5px 50px",
                                                            }}
                                                      >
                                                            ADD
                                                      </button>
                                                </div>
                                          </div>
                                    );
                              })}
                        </Carousel>
                  </BigItemContainer>
                  <ChekoutButtonDiv>
                        <button>TOTAL : ₹ {total}</button>
                        <button onClick={handleContinue}>
                              COUNTINUE
                        </button>
                  </ChekoutButtonDiv>
            </div>
      );
};

export default AddToCartBottom;
