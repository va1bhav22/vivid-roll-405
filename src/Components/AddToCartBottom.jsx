import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import {
      BigItemContainer,
      ImageContainerDiv,
      IndividualProductDiv,
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
                                                            style={{"padding" : "5px 50px"}}
                                                      >
                                                            ADD
                                                      </button>
                                                </div>
                                          </div>
                                    );
                              })}
                        </Carousel>
                  </BigItemContainer>
            </div>
      );
};

export default AddToCartBottom;
