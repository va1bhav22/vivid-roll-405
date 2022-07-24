import React from "react";
import {
      ImageDiv,
      JeansTopSectionMainDiv,
} from "./jeansTopSection";
import ProductFooter from "./ProductFooter";

const JeansBottomSection = () => {
      return (
            <>
            <div>
                  <JeansTopSectionMainDiv>
                        <ImageDiv>
                              <div
                                    style={{
                                          borderRight: "1px solid black",
                                          borderBottom: "1px solid black",
                                    }}
                              >
                                    <img
                                          src="https://static.zara.net/photos///2022/I/M/2/p/0000/001/237/2/w/373/0000001237_13_1_1.jpg?ts=1657657055166"
                                          alt="image1"
                                    />
                              </div>
                              <div>
                                    <img
                                          src="https://static.zara.net/photos///2022/I/M/1/p/0000/001/318/2/w/373/0000001318_2_2_1.jpg?ts=1657812103625"
                                          alt="image2"
                                    />
                              </div>
                        </ImageDiv>
                  </JeansTopSectionMainDiv>
                  <div
                        style={{
                              display: "block",
                              width: "26vw",
                              // height: "70vh",
                              marginLeft: "auto",
                              marginRight: "auto",
                              margin: "auto",
                              lineHeight : "16px"
                        }}
                  >
                        <img
                              src="https://static.zara.net/photos///2022/I/0/2/p/4060/405/406/2/w/183/4060405406_15_1_1.jpg?ts=1657723299823"
                              alt="image3"
                        />
                        <p style={{"fontSize" : "11px"}}>THE 90S SLIM FIT JEANS</p>
                        <p style={{"fontSize" : "11px"}}>2,490.00</p>
                  </div>
            </div>
                  <ProductFooter />
                  </>
      );
};

export default JeansBottomSection;
