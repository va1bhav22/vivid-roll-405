import styled from "styled-components";

export const AddToCartContainerNavbar = styled.div`
      width: 98vw;
      display: flex;
      justify-content: space-between;
      /* position: fixed; */
      margin: auto;
`;

export const LogoDiv = styled.div`
      display: block;
      width: 18vw;
      margin: 5px;
      margin-left: 60px;
`;

export const MenuDiv = styled.div`
      display: flex;
      width: 8vw;
      height: 6vh;
      margin: 10px;
      margin-top: 35px;
      font-size: 14px;
      justify-content: space-around;
      text-align: center;
`;

export const CartTopSectionDiv = styled.div`
      width: 35vw;
      margin-top: 28vh;
      margin-left: 50px;
      height: 120px;
`;

export const Button = styled.div`
      font-size: 11px;
      background-color: #f5eeee;
      width: 70%;
      margin: auto;
      margin-left: 20px;
      padding: 8px;
`;

export const CartItemProductDiv = styled.div`
      width: 96vw;
      margin: auto;
      margin-top: 50px;
      font-size: 12px !important;
      margin-right: 0px !important;
`;

export const IndividualProductDiv = styled.div`
      border: 1px solid green;
      display: block;
      margin: auto;
      width: 25vw;
`;

export const ImageContainerDiv = styled.div`
      display: block;
      width: 300px;
      overflow: hidden;
      border: 1px solid black;
      margin-left: auto;
      margin-right: auto;
`;

export const BigItemContainer = styled.div`
      margin: 0 50px;
      margin-right: 0px;
      margin-bottom: 10px;
      /* border: 1px solid red; */
`;

export const TotalPriceDiv = styled.div`
      height: 70px;
      background-color: gray;
      border: 1px solid red;
      text-align: right;
      padding-right: 20px;
      justify-content: flex-end;
      position: fixed;
      margin-bottom: 30vh;
`;

export const AddressMainDiv = styled.div`
      width: 98vw;
      height: 90vh;
      margin: auto;
      margin-top: 5px;
`;

export const AddressDiv = styled.div`
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
      margin-top: 80px;
`;

export const AddressForm = styled.div`
      width: 40%;
      margin: 10px;
      margin-top: 90px;
      margin-left: 40px;
      p {
            font-size: 17px;
            font-weight: 600;
            margin: 5px;
      }
      div {
            input {
                  outline: none;
                  border-bottom: 1px solid black;
                  font-size: 12px;
                  margin: 10px;
                  width: 20vw;
                  background-color: white;
            }
      }
`;

export const AddressButton = styled.button`
      background-color: black;
      color: white;
      font-size: 18px;
      padding: 5px;
      padding-left: 25px;
      padding-right: 25px;
      margin: 10px;
      margin-top: 20px;
      font-size: 13px;
`;
export const Address = styled.div`
      max-width: 50%;
      min-width: 40%;
      margin: 10px;
      margin-top: 95px;
      padding: 5px;
      padding-top: 40px;
      align-items: center;
      text-align: right;
      font-size: 15px;

      button {
            font-size: 13px;
            margin-top: 70px;
            margin-right: 115px;
      }
`;

export const ChekoutButtonDiv = styled.div`
      max-width: 30vw;
      margin-left: 1000px !important;
      text-align: right;
      position: fixed;
      z-index: 1;
      bottom: 0;
      right: 0;
      button {
            padding: 2px 15px;
            background: black;
            color: white;
            margin: 10px;
      }
`;
