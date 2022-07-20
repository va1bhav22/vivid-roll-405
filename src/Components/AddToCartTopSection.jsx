import React, { useEffect, useState } from "react";
import { Button, CartTopSectionDiv } from "./styledcomponent";
import { useSelector } from "react-redux";

const AddToCartTopSection = () => {
      const cart = useSelector((state) => state.cartReducer.CartProduct);
      const [total,setTotal] = useState(0);
      useEffect(() => {
            var total_amount = 0;
            cart.map((item)=> {
                  total_amount += item.Qyantity*item.price;
            });
            setTotal(total_amount);
      }, [cart]);
      return (
            <CartTopSectionDiv>
                  <div
                        style={{
                              display: "flex",
                              justifyContent: "space-around",
                              width: "90%",
                              // border: "1px solid red",
                              margin: "auto",
                              marginLeft: "10px",
                              alignItems: "center",
                              fontSize: "21px",
                        }}
                  >
                        <div>
                              <pre style={{ fontWeight: "700" }}>
                                    CART ({cart.length})
                              </pre>
                        </div>
                        <div>
                              <p style={{ color: "black" }}>WISHLIST</p>
                        </div>
                        <div style={{ marginLeft: "40px" }}>
                              <pre>TOTAL : {total}</pre>
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
