import React from "react";
import "../App.css";
import {
      BigImageDiv,
      BoldHeading,
      JeansTopSectionMainDiv,
      Paragraph,
} from "./jeansTopSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const JeansCategoryTopSection = () => {
    
      return (
            <JeansTopSectionMainDiv style={{"marginTop" : "130px"}}>
                  <BigImageDiv>
                        <img
                              style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    display: "block",
                              }}
                              src="https://static.zara.net/photos///2022/I/M/1/p/0000/001/511/2/w/429/0000001511_2_2_1.jpg?ts=1658398413525"
                              alt="imge2"
                        />
                  </BigImageDiv>
                  <Paragraph>
                        <BoldHeading>JEANS FOR MEN</BoldHeading>
                        <p>
                              IF THERE IS AN ACCLAIMED, ON-TREND AND ICONIC
                              GARMENT, IT'S CERTAINLY MEN'S JEANS. THE EDIT IS
                              ALL ABOUT MAXIMUM STYLE WITH MINIMUM EFFORT, WHICH
                              IS WHY ZARA'S JEANS BRING A LAID-BACK VIBE FOR
                              FLAWLESS EVERYDAY LOOKS WITHOUT THE HASSLE. WHEN
                              THE OCCASION CALLS
                        </p>
                  </Paragraph>
            </JeansTopSectionMainDiv>
      );
};

export default JeansCategoryTopSection;
