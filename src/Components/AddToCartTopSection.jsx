import React, { useEffect, useState } from "react";
import { Button, CartTopSectionDiv } from "./styledcomponent";
import { useSelector } from "react-redux";

const AddToCartTopSection = () => {
  const cart = useSelector((state) => state.cartReducer.CartProduct);
  console.log(cart);
  return (
    <CartTopSectionDiv>
      {cart.length!==0 && (
            <>
            <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
              // border: "1px solid red",
              margin: "auto",
              marginLeft: "10px",
              alignItems: "center",
              fontSize: "21px",
            }}
          >
            <div>
            <pre style={{ fontWeight: "700" }}>CART ({cart.length})</pre>
            </div>
            <div>
              <p style={{ color: "black" }}>WISHLIST</p>
            </div>
          </div>
          <div>
            <Button>
              Items in the basket are not reserved until completing the purchase.
            </Button>
          </div>
          </>
      )}
      {cart.length == 0 && (<pre style={{ fontWeight: "700" }}>Your Basket is Empty.</pre>)}
    </CartTopSectionDiv>
  );
};

export default AddToCartTopSection;
