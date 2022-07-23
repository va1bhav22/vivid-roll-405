import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CartItemProductDiv } from "./styledcomponent";
import {
  Get_UDATED_LOCAL_STORAGE_FUNCT,
  GET_UPDATED_ITEM_QUANTITY_FUNC,
} from "../Redux/CartProvider/action";

const AddToCartMiddleSection = () => {

  const dispatch = useDispatch();
  const handleIncrement = (ind) => {
    const items = JSON.parse(localStorage.getItem("CartItem"));
    let newItem = items[ind];
    newItem.Quantity += 1;
    localStorage.setItem("CartItem", JSON.stringify(items));
    dispatch(GET_UPDATED_ITEM_QUANTITY_FUNC(items));
  };
   var items;
  const handleDecrement = (index, ind) => {
    items = JSON.parse(localStorage.getItem("CartItem"));
    let newItem = items[index];
    const quan = newItem.Quantity;
    if (quan === 1) {
      handleDelete(ind);
    } else {
      newItem.Quantity -= 1;
      localStorage.setItem("CartItem", JSON.stringify(items));
      dispatch(GET_UPDATED_ITEM_QUANTITY_FUNC(items));
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1310 },
      items: 3,
      paritialVisibilityGutter: 30,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 2,
      //   paritialVisibilityGutter: 30,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const handleDelete = (ind) => {
    let items = JSON.parse(localStorage.getItem("CartItem"));
    items = items.filter((item) => item.id !== ind);
    localStorage.setItem("CartItem", JSON.stringify(items));
    if (items.length === 0) {
      localStorage.removeItem("item");
    }
    dispatch(Get_UDATED_LOCAL_STORAGE_FUNCT(items));
  };
  const CartItem = useSelector((state) => state.cartReducer.CartProduct);
  console.log(CartItem);
  return (
    <CartItemProductDiv>
      {CartItem && (
        <Carousel autoPlay responsive={responsive}>
        {CartItem?.map((item, index) => {
          return (
            <div
              key={item.referrence}
              style={{
                width: "30vw",
                display: "flex",
                padding: "5px",
                justifyContent: "space-evenly",
                marginRight: "40px",
                // boxShadow:
                //       "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <div
                key={item.referrence}
                style={{
                  maxWidth: "74%",
                  display: "block",
                  overflow: "hidden",
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                <p>{item.title}</p>
                <img
                  src={item.image[0]}
                  alt={item.title}
                  style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    placeItems: "center",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "grey",
                  marginTop: "30px",
                  textAlign: "left",
                  fontSize: "11px",
                }}
              >
                <div>
                  <p>REF.- {item.referrence}</p>
                  <p>{item.size}</p>
                  <p>{item.color}</p>
                  <pre
                    style={{
                      // fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    <span onClick={() => handleIncrement(index)}>+</span>{" "}
                    {item.Quantity}{" "}
                    <span
                      onClick={() => handleDecrement(index, item.referrence)}
                    >
                      -
                    </span>
                  </pre>
                </div>
                <div>₹ {item.price}.00</div>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <p onClick={() => handleDelete(item.id)}>DELETE</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      )}
      {
        !CartItem && (
          <div>
            <p>Your Cart is Empty.</p>
          </div>
        )
      }
    </CartItemProductDiv>
  );
};

export default AddToCartMiddleSection;
