import React from "react";
import { MensBlazerDiv } from "./mensProductItemcomp";

const ItemPoster = ({imageurl,price,title}) => {
      return (
            <div>
                  <MensBlazerDiv>
                        <img
                              style={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                              }}
                              src={imageurl}
                              alt="imag21211"
                        />
                        <p>{title}</p>
                        <p>₹ {price}</p>
                  </MensBlazerDiv>
            </div>
      );
};

export default ItemPoster;
