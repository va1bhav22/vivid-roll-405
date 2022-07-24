import React from "react";
import { useNavigate } from "react-router-dom";
import {
      ItemImgDiv,
      ItemInfoDiv,
      MensProduct4ItemDiv,
      MensProductItemDiv,
} from "./mensProductItemcomp";

// const mesn3Items = [
//       {
//             id: "892078802153",
//             image: "https://static.zara.net/photos///2022/I/0/1/p/5809/277/800/12/w/204/5809277800_1_1_1.jpg?ts=1657616413677",
//             title: "PINSTRIPE SUIT TROUSERS",
//             price: "4,990.00",
//             apikey: "MENS_BLAZERS",
//       },
//       {
//             id: "91283930039117",
//             image: "https://static.zara.net/photos///2022/I/0/1/p/1781/566/250/2/w/204/1781566250_1_1_1.jpg?ts=1657615587438",
//             title: "POPLIN SHIRT",
//             price: "2,9900.00",
//             apikey: "MENS_BLAZERS",
//       },
//       {
//             id: "885502920752154",
//             image: "https://static.zara.net/photos///2022/I/0/2/p/5758/494/500/12/w/204/5758494500_1_1_1.jpg?ts=1657615951718",
//             title: "SUIT BLAZER",
//             price: "8,990.00",
//             apikey: "MENS_BLAZERS",
//       },
// ];

// const mens4item = [
//       {
//             id: "998287378290119",
//             image: "https://static.zara.net/photos///2022/I/0/1/p/5853/277/800/13/w/204/5853277800_1_1_1.jpg?ts=1657616567414",
//             title: "PINSTRIPE SUIT BLAZER",
//             price: "8,990.00",
//             apikey: "MENS_BLAZERS",
//       },
//       {
//             id: "2008928934090752152",
//             image: "https://static.zara.net/photos///2022/I/0/2/p/5759/494/500/12/w/204/5759494500_2_3_1.jpg?ts=1657615952281",
//             title: "SLIM FIT SUIT TROUSERS",
//             price: "4,990.00",
//             apikey: "MENS_BLAZERS",
//       },
//       {
//             id: "2008920752152",
//             image: "https://static.zara.net/photos///2022/I/0/1/p/2553/321/800/12/w/204/2553321800_1_1_1.jpg?ts=1657615752901",
//             title: "RELAXED FIT DENIM TROUSERS",
//             price: "4,990.00",
//             apikey: "MENS_BLAZERS",
//       },
//       {
//             id: "sklwx023e-sdjkc10iwdnm-/wxms/c/jk",
//             image: "https://static.zara.net/photos///2022/I/0/2/p/7380/645/800/12/w/204/7380645800_1_1_1.jpg?ts=1657616645928",
//             title: "SUIT TECHNICAL BERMUDA SHORTS---",
//             price: "2,990.00",
//             apikey: "MENS_BLAZERS",
//       },
// ];
// localStorage.setItem("Mens3ItemsList", JSON.stringify(mesn3Items));
// localStorage.setItem("Mens4ItemsList", JSON.stringify(mens4item));

const MensProductItem = ({ data1, data2 }) => {
      const navigate = useNavigate();
      const handleProduct = (title, id) => {
            navigate(`/description/${title}/${id}`);
      };

      return (
            <>
                  {data1 && (
                        <MensProductItemDiv>
                              {data1.map((item) => {
                                    return (
                                          <div
                                                key={item.id}
                                                onClick={() => {
                                                      handleProduct(
                                                            item.apikey,
                                                            item.id
                                                      );
                                                }}
                                          >
                                                <ItemImgDiv>
                                                      <img
                                                            style={{
                                                                  display: "block",
                                                                  width: "100%",
                                                                  height: "100%",
                                                                  objectFit:
                                                                        "contain",
                                                            }}
                                                            src={item.image}
                                                            alt={item.title}
                                                      />
                                                </ItemImgDiv>
                                                <ItemInfoDiv>
                                                      <p>{item.title}</p>
                                                      <p>₹ {item.price}</p>
                                                </ItemInfoDiv>
                                          </div>
                                    );
                              })}
                        </MensProductItemDiv>
                  )}
                  {data2 && (
                        <MensProduct4ItemDiv>
                              {data2.map((item) => {
                                    return (
                                          <div
                                                key={item.id}
                                                onClick={() => {
                                                      handleProduct(
                                                            item.apikey,
                                                            item.id
                                                      );
                                                }}
                                          >
                                                <ItemImgDiv>
                                                      <img
                                                            style={{
                                                                  display: "block",
                                                                  width: "100%",
                                                                  height: "100%",
                                                                  objectFit:
                                                                        "contain",
                                                            }}
                                                            src={item.image}
                                                            alt={item.title}
                                                      />
                                                </ItemImgDiv>
                                                <ItemInfoDiv>
                                                      <p>{item.title}</p>
                                                      <p>₹ {item.price}</p>
                                                </ItemInfoDiv>
                                          </div>
                                    );
                              })}
                        </MensProduct4ItemDiv>
                  )}
            </>
      );
};

export default React.memo(MensProductItem);
