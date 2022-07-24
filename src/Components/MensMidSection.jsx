import React from "react";
import {
      MensMidSectionImageDiv,
      MensMidSectionSmallVideoDiv,
      MensTopSectionDiv,
} from "./menstopSectionstylecomp";

const MensMidSection = () => {
      return (
            <MensTopSectionDiv>
                  <MensMidSectionImageDiv>
                        <img
                              style={{ display: "block", width: "60%" }}
                              src="https://static.zara.net/photos///2022/I/M/1/p/0000/001/184/2/w/877/0000001184_15_2_1.jpg?ts=1657648261606"
                              alt="image1"
                        />
                  </MensMidSectionImageDiv>
                  <MensMidSectionSmallVideoDiv>
                        <video
                              loop={true}
                              style={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                              }}
                              autoPlay={true}
                              muted={true}
                              src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Originals/Blue%20Version%20FW22/Drop%201/fw22-blue-version-q3-dp3-hp-mh-large-dual-gender-d.mp4"
                        ></video>
                  </MensMidSectionSmallVideoDiv>
            </MensTopSectionDiv>
      );
};

export default React.memo(MensMidSection);
