import React, { useState } from "react";
import {
      Address,
      AddressButton,
      AddressDiv,
      AddressForm,
      AddressMainDiv,
} from "../Components/styledcomponent";
import CartNavbar from "../Components/CartNavbar";
import ProductFooter from "../Components/ProductFooter";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
      const [show, setShow] = useState(false);
      const navigate = useNavigate();
      const [address, setAddress] = useState({
            pin_code: "",
            city: "",
            user_address: "",
      });
      const handleaddressChange = (e) => {
            const { id, value } = e.target;
            setAddress({
                  ...address,
                  [id]: value,
            });
      };
      const Gotopayment = () => {
            navigate("/payment");
      };
      const handleSubmitAddress = () => {
            if (address.city !== "") {
                  setShow(true);
            }
      };
      return (
            <>
                  <AddressMainDiv>
                        <CartNavbar />
                        <AddressDiv>
                              <AddressForm>
                                    <p>YOUR ADDRESS</p>
                                    <div>
                                          <input
                                                onChange={handleaddressChange}
                                                type="number"
                                                placeholder="PIN CODE"
                                                id="pin_code"
                                          />
                                          <br />
                                          <input
                                                onChange={handleaddressChange}
                                                type="text"
                                                placeholder="CITY"
                                                id="city"
                                          />
                                          <br />
                                          <input
                                                onChange={handleaddressChange}
                                                type="text"
                                                placeholder="YOUR ACTUAL ADDRESS"
                                                id="user_address"
                                          />
                                          <br />
                                    </div>
                                    <AddressButton
                                          onClick={handleSubmitAddress}
                                    >
                                          SUBMIT
                                    </AddressButton>
                              </AddressForm>
                              <Address>
                                    {show && (
                                          <>
                                                <p style={{ maxWidth: "30vw" }}>
                                                      <span
                                                            style={{
                                                                  fontWeight:
                                                                        "600",
                                                                  textDecoration:
                                                                        "underline",
                                                                  textAlign:
                                                                        "left",
                                                            }}
                                                      >
                                                            DELIVERY ADDRESS{" "}
                                                      </span>
                                                      : {address.user_address},
                                                      {address.city}-
                                                      {address.pin_code}
                                                </p>
                                                <AddressButton
                                                      onClick={Gotopayment}
                                                >
                                                      COUNTINUE
                                                </AddressButton>
                                          </>
                                    )}
                              </Address>
                        </AddressDiv>
                  </AddressMainDiv>
                  <ProductFooter />
            </>
      );
};

export default AddressPage;
