import React from "react";
import AddToCartBottom from "./AddToCartBottom";
import AddToCartMiddleSection from "./AddToCartMiddleSection";
import AddToCartTopSection from "./AddToCartTopSection";
import CartNavbar from "./CartNavbar";

const AddToCartPage = () => {
      return (
            <>
                  <CartNavbar />
                  <AddToCartTopSection />
                  <AddToCartMiddleSection />
                  <AddToCartBottom />
            </>
      );
};

export default AddToCartPage;
