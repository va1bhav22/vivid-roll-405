import React from "react";
import { Button, CartTopSectionDiv } from "./styledcomponent";
import { useSelector } from "react-redux";

const AddToCartTopSection = () => {
      const cart = useSelector((state) => state.CartProduct);

      return (
            <CartTopSectionDiv>
                  <div
                        style={{
                              display: "flex",
                              justifyContent: "space-around",
                              width: "50%",
                              margin: "auto",
                              marginLeft: "10px",
                              fontSize: "21px",
                        }}
                  >
                        <div>
                              <pre style={{ fontWeight: "700" }}>
                                    CART ({cart.length})
                              </pre>
                        </div>
                        <div>
                              <p style={{ color: "black.200" }}>WISHLIST</p>
                        </div>
                  </div>
                  <div>
                        <Button>
                              Items in the basket are not reserved until
                              completing the purchase.
                        </Button>
                  </div>
            </CartTopSectionDiv>
      );
};

export default AddToCartTopSection;
