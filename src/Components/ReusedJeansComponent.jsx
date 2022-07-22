import React from "react";
import Slider from "react-slick"
import "../App.css";
import {
      ImageDiv,
      IndividualItemDiv,
      IndividualItemImageDiv,
      IndividualItemInfoDiv,
      JeansTopSectionMainDiv,
} from "./jeansTopSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var settings = {
    dots: true,
    speed: 500,
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: true,
};

const ReusedJeansComponent = ({image1,image2,jeans_data}) => {
      return (
            <div >
                  <JeansTopSectionMainDiv >
                        <ImageDiv>
                              <div>
                                    <img
                                          src={image1}
                                          alt="image1"
                                    />
                              </div>
                              <div>
                                    <img
                                          src={image2}
                                          alt="image2"
                                    />
                              </div>
                        </ImageDiv>
                        <div
                              style={{
                                    width: "75vw",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginTop : "60px",
                                    marginBottom : "20px",
                              }}
                        >
                              <Slider slidesToShow={jeans_data.length>=5 ? 5 : 3} {...settings}>
                                    {jeans_data.map((item) => {
                                          return (
                                                <IndividualItemDiv key={item.id}>
                                                      <IndividualItemImageDiv>
                                                            <img
                                                                  src={
                                                                        item.image
                                                                  }
                                                                  alt={
                                                                        item.title
                                                                  }
                                                            />
                                                      </IndividualItemImageDiv>
                                                      <IndividualItemInfoDiv>
                                                            <p>{item.title}</p>
                                                            <p>₹ {item.price}</p>
                                                      </IndividualItemInfoDiv>
                                                </IndividualItemDiv>
                                          );
                                    })}
                              </Slider>
                        </div>
                  </JeansTopSectionMainDiv>
            </div>
      );
};

export default ReusedJeansComponent;
