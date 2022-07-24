import React from "react";
import { useNavigate } from "react-router-dom";
import {
      ItemImgDiv,
      ItemInfoDiv,
      MensProduct4ItemDiv,
      MensProductItemDiv,
} from "./mensProductItemcomp";

const mensBlazer = [
      {
            id: "99878291123316",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5809/494/606/12/w/204/5809494606_1_1_1.jpg?ts=1657710539364",
            title: "SLIM FIT SUIT TROUSERS (id)",
            price: "4,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "5562819290215",
            image: "https://static.zara.net/photos///2022/I/0/2/p/5808/494/606/12/w/204/5808494606_2_3_1.jpg?ts=1657616148463",
            title: "SUIT BLAZER",
            price: "8,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "1488028330049",
            image: "https://static.zara.net/photos///2022/I/0/2/p/7380/641/707/2/w/204/7380641707_1_1_1.jpg?ts=1657616576224",
            title: "TECHNICAL PARKA",
            price: "9,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "99898920211113",
            image: "https://static.zara.net/photos///2022/I/0/2/p/3332/302/707/2/w/204/3332302707_1_1_1.jpg?ts=1657615883070",
            title: "KNITTED WAISTCOAT",
            price: "2,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "12",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5853/277/800/12/w/204/5853277800_1_1_1.jpg?ts=1657616498219",
            title: "PINSTRIPE SUIT BLAZER",
            price: "8,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "029207156",
            image: "https://static.zara.net/photos///2022/I/0/1/p/2553/322/614/2/w/204/2553322614_1_1_1.jpg?ts=1657615792799",
            title: "WIDE FIT TROUSERS",
            price: "4,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "01929283782911",
            image: "https://static.zara.net/photos///2022/I/0/2/p/2674/303/676/12/w/204/2674303676_1_1_1.jpg?ts=1657615846313",
            title: "DOUBLE-BREASTED SUIT BLAZER",
            price: "9,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "10101923837292",
            image: "https://static.zara.net/photos///2022/I/0/2/p/2674/304/676/12/w/204/2674304676_2_3_1.jpg?ts=1657615847123",
            title: "PLEATED SUIT TROUSERS",
            price: "4,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "998287378290119",
            image: "https://static.zara.net/photos///2022/I/0/2/p/5851/281/818/12/w/204/5851281818_1_1_1.jpg?ts=1657616149858",
            title: "SUIT BLAZER",
            price: "8,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "998287378290119202020202",
            image: "https://static.zara.net/photos///2022/I/0/2/p/5852/281/818/12/w/204/5852281818_2_3_1.jpg?ts=1657616218938",
            title: "PLEATED SUIT TROUSERS (id)",
            price: "4,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "900019287",
            image: "https://static.zara.net/photos///2022/I/0/2/p/3332/302/670/2/w/204/3332302670_2_3_1.jpg?ts=1657615883025",
            title: "KNITTED WAISTCOAT",
            price: "2,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "89190237837946",
            image: "https://static.zara.net/photos///2022/I/0/2/p/7380/670/800/12/w/204/7380670800_2_3_1.jpg?ts=1657616646312",
            title: "SUIT TECHNICAL BLAZER",
            price: "7,990.00",
            apikey:"MENS_BLAZERS"
      },
];
localStorage.setItem("mensBlazer", JSON.stringify(mensBlazer));
const data1 = [
      {
            id: "54892927399201",
            image: "https://static.zara.net/photos///2022/I/0/2/p/5697/654/250/2/w/204/5697654250_6_1_1.jpg?ts=1657704540166",
            title: "FRUIT PRINT SHIRT",
            price: "2,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "2112345090086",
            image: "https://static.zara.net/photos///2022/I/0/2/p/5683/380/700/2/w/204/5683380700_6_1_1.jpg?ts=1657730562330",
            title: "TROPICAL PRINT SHIRT",
            price: "2,990.00",
            apikey:"MENS_BLAZERS"
      },
      {
            id: "61525141829307",
            image: "https://static.zara.net/photos///2022/I/0/2/p/5683/382/711/2/w/204/5683382711_6_1_1.jpg?ts=1657730544222",
            title: "TROPICAL PRINT SHIRT",
            price: "2,990.00",
            apikey:"MENS_BLAZERS"
      },
];
const data = JSON.parse(localStorage.getItem("mensBlazer"));
const MensBlazerSection = () => {
      const navigate = useNavigate();
      const handleProduct = (title, id) => {
            navigate(`/description/${title}/${id}`);
      };

      return (
            <div>
                  <MensProduct4ItemDiv>
                        {data.map((item) => {
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
            </div>
      );
};

export default MensBlazerSection;
