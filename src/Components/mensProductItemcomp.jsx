import styled from "styled-components";

export const MensProductItemDiv = styled.div`
      width: 55vw;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      /* max-height: 360px; */
      justify-content: space-evenly;
      margin-top: 40px;
      div {
            width: 17vw;
            max-height: 100%;
            display: block;
            /* border: 1px solid black; */
      }
`;
export const MensProduct4ItemDiv = styled.div`
      width: 75vw;
      margin-left: auto;
      margin-right: auto;
      display: grid;
      grid-template-columns: repeat(4, 17vw);
      grid-template-rows: auto;
      /* max-height: 350px; */
      justify-content: space-evenly;
      margin-top: 30px;
      margin-bottom: 40px;
      div {
            display: block;
      }
`;

export const ItemImgDiv = styled.div`
      display: block;
      width: 100%;
      height: 80%;
      background-color: #f3f3f3;
      /* background-color: #e5e5e5; */
`;
export const ItemInfoDiv = styled.div`
      display: block;
      width: 100%;
      height: 20%;
      font-size: 13px;
      text-align: left;
      line-height: 20px;
      /* border: 1px solid red; */
      color: #757373;
`;
export const MensBlazerDiv = styled.div`
      display: block;
      width: 30vw;
      /* height: 300px; */
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      p {
            text-align: left;
            font-size: 12px;
            line-height: 16px;
            color: #636060;
      }
`;
