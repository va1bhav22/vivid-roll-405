import React from "react";
import {
      BigImageDiv,
      MensTopSectionDiv,
      MensTopSectionImageContainerDiv,
      TwoImageDiv,
} from "./menstopSectionstylecomp";

const MensTopSection = ({ topsectionurls }) => {
      const {
            videourl,
            image1,
            image2,
            image3,
            big_image1,
            big_image2,
            img1,
            img2,
      } = topsectionurls;

      return (
            <MensTopSectionDiv>
                  {videourl && (
                        <div>
                              <video
                                    loop={true}
                                    style={{
                                          display: "block",
                                          maxWidth: "100%",
                                    }}
                                    src={videourl}
                                    autoPlay
                                    muted={true}
                              ></video>
                        </div>
                  )}
                  <MensTopSectionImageContainerDiv key={"hhtpseklsi-21092002/sete"}>
                        <img
                              style={{ display: "block", maxWidth: "100%" }}
                              src={image1}
                              alt="image1"
                              key={image1}
                        />
                        <img
                              style={{ display: "block", maxWidth: "100%" }}
                              src={image2}
                              alt="image2"
                              key={image2}
                        />
                        <img
                              style={{
                                    display: "block",
                                    maxWidth: "100%",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                              }}
                              src={image3}
                              alt="image3"
                              key={image3}
                        />
                  </MensTopSectionImageContainerDiv>
                  <BigImageDiv key={"divay15081998-alosjuim"}>
                        <img
                              style={{ display: "block", maxWidth: "100%" }}
                              src={big_image1}
                              alt="big_image1"
                        />
                  </BigImageDiv>
                  <BigImageDiv key={"pqowlskai9039dkd/lsodue"}>
                        <img
                              style={{ display: "block", maxWidth: "100%" }}
                              src={big_image2}
                              alt="big_image2"
                        />
                  </BigImageDiv>
                  <TwoImageDiv key={"almz002lsmsosps/-anpovjmqaak"}>
                        <div>
                              <img
                                    style={{
                                          display: "block",
                                          maxWidth: "100%",
                                    }}
                                    src={img1}
                                    alt="count-men"
                              />
                        </div>
                        <div>
                              <img
                                    style={{
                                          display: "block",
                                          maxWidth: "100%",
                                    }}
                                    src={img2}
                                    alt="court-men2"
                              />
                        </div>
                  </TwoImageDiv>
            </MensTopSectionDiv>
      );
};

export default React.memo(MensTopSection);
