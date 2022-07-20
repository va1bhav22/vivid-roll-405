import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CartItemProductDiv } from "./styledcomponent";

const AddToCartMiddleSection = () => {
      const responsive = {
            desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3,
                  slidesToSlide: 3, // optional, default to 1.
            },
            tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                  slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                  slidesToSlide: 1, // optional, default to 1.
            },
      };
      const CartItem = useSelector((state) => state.CartProduct);
      console.log(CartItem);
      return (
            <CartItemProductDiv>
                  <Carousel autoPlay responsive={responsive}>
                        {CartItem?.map((item) => {
                              return (
                                    <div
                                          key={item.referrence}
                                          style={{
                                                width: "31vw",
                                                border: "1px solid black",
                                                display: "flex",
                                                justifyContent : "space-evenly"
                                          }}
                                    >
                                          <div
                                                key={item.referrence}
                                                style={{
                                                      maxWidth: "80%",
                                                      display: "block",
                                                      overflow: "hidden",
                                                      textAlign : "left",
                                                      alignItems : "flex-start"
                                                }}
                                          >
                                                <p>
                                                      {item.title}
                                                </p>
                                                <img
                                                      src={item.img}
                                                      alt={item.title}
                                                      style={{"width" : "90%"}}
                                                />
                                          </div>
                                          <div
                                                style={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      justifyContent:
                                                            "space-between",
                                                      color: "grey",
                                                      marginTop : "30px"
                                                }}
                                          >
                                                <div>
                                                      {/* <p>REF. {item.referrence}</p> */}
                                                      <p>{item.color}</p>
                                                </div>
                                                <div>₹ {item.price}.00</div>
                                                <div>
                                                      <p>DELETE</p>
                                                </div>
                                          </div>
                                    </div>
                              );
                        })}
                  </Carousel>
                  ;
            </CartItemProductDiv>
      );
};

export default AddToCartMiddleSection;
