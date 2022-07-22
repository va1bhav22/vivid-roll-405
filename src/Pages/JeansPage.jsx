import React from "react";
import JeansBottomSection from "../Components/JeansBottomSection";
import JeansCategoryTopSection from "../Components/JeansCategoryTopSection";
import JeansNavbar from "../Components/JeansNavbar";
import Navbar from "../Components/Navbar";
import ReusedJeansComponent from "../Components/ReusedJeansComponent";

const jeans_data = [
      {
            id: "292023982hdw98d9n",
            image: "https://static.zara.net/photos///2022/I/0/1/p/6045/410/406/2/w/183/6045410406_15_1_1.jpg?ts=1657722880788",
            title: "RIPPED SKINNY JEANS",
            price: "2,990.00",
      },
      {
            id: "sdkmsdp230238-23iwdk",
            image: "https://static.zara.net/photos///2022/I/0/1/p/6045/410/250/2/w/183/6045410250_15_1_1.jpg?ts=1657722840898",
            title: "RIPPED SKINNY JEANS",
            price: "2,990.00",
      },
      {
            id: "alkxkjhdeucd89wcnm/kl9",
            image: "https://static.zara.net/photos///2022/I/0/1/p/6045/410/800/2/w/183/6045410800_15_1_1.jpg?ts=1657722943571",
            title: "RIPPED SKINNY JEANS",
            price: "2,990.00",
      },
      {
            id: "dkwjd02e902=cdcsdjk",
            image: "https://static.zara.net/photos///2022/I/0/1/p/6045/335/800/2/w/183/6045335800_15_1_1.jpg?ts=1657722973588",
            title: "EMBROIDERED SKINNY JEANS",
            price: "4,990.00",
      },
      {
            id: "wlkwjc38729jkmdx-clskjc",
            image: "https://static.zara.net/photos///2022/I/0/1/p/6688/345/250/2/w/183/6688345250_15_1_1.jpg?ts=1657726584588",
            title: "RIPPED SKINNY JEANS WITH BAN",
            price: "4,990.00",
      },
      {
            id: "alaskxsam,wed-dlkmdc",
            image: "https://static.zara.net/photos///2022/I/0/1/p/8062/360/710/2/w/183/8062360710_15_1_1.jpg?ts=1657888379343",
            title: "ABSTRACT PRINT JEANS",
            price: "2,990.00",
      },
];

const jeans_data2 = [
      {
            id: "34d53asjhbsx8932nc",
            image: "https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/183/8727410712_15_1_1.jpg?ts=1657721804746",
            title: "STRAIGHT FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "askjasjk190243903",
            image: "https://static.zara.net/photos///2022/I/0/2/p/8727/410/800/2/w/183/8727410800_15_1_1.jpg?ts=1657721805394",
            title: "STRAIGHT FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "sdpscd-10e23dkjd=jksnmc",
            image: "https://static.zara.net/photos///2022/I/0/2/p/8727/410/406/2/w/183/8727410406_15_1_1.jpg?ts=1657721804701",
            title: "STRAIGHT FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "skdsls/dsjkwdowe-dwejn",
            image: "https://static.zara.net/photos///2022/I/0/2/p/8727/410/427/2/w/183/8727410427_15_1_1.jpg?ts=1657721804994",
            title: "STRAIGHT FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "39202jnsdcksdc=scjnm",
            image: "https://static.zara.net/photos///2022/I/0/2/p/8727/410/707/2/w/183/8727410707_15_1_1.jpg?ts=1657721805069",
            title: "STRAIGHT FIT JEANS",
            price: "2,990.00",
      },
];

const jeans_data3 = [
      {
            id: "aslslkdcjo-wedijk923",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/440/400/2/w/183/5575440400_15_1_1.jpg?ts=1657726453733",
            title: "BASIC SLIM FIT JEANS",
            price: "2,490.00",
      },
      {
            id: "2983ikjwedmok/wdkl",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/440/407/2/w/183/5575440407_15_1_1.jpg?ts=1657726314210",
            title: "BASIC SLIM FIT JEANS",
            price: "2,490.00",
      },
      {
            id: "wdikjwd-239023hcdnbs",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/440/406/2/w/183/5575440406_15_1_1.jpg?ts=1657726480190",
            title: "BASIC SLIM FIT JEANS",
            price: "2,490.00",
      },
      {
            id: "duhjwd8923-23e9ijd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/440/800/2/w/183/5575440800_15_1_1.jpg?ts=1657726406710",
            title: "BASIC SLIM FIT JEANS",
            price: "2,490.00",
      },
      {
            id: "wdjkwe02-29023ebncdui",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/440/427/2/w/183/5575440427_15_1_1.jpg?ts=1657726501729",
            title: "BASIC SLIM FIT JEANS",
            price: "2,490.00",
      },
];

const jeans_data4 = [
      {
            id: "wdoi239e0823-23e9iuwjdcsn",
            image: "https://static.zara.net/photos///2022/I/0/2/p/0840/350/250/2/w/183/0840350250_15_1_1.jpg?ts=1657725538034",
            title: "TAPERED SKINNY JEANS",
            price: "2,490.00",
      },
      {
            id: "sckjwdoi-23e902iojd",
            image: "https://static.zara.net/photos///2022/I/0/2/p/0840/350/800/2/w/183/0840350800_15_1_1.jpg?ts=1657725563145",
            title: "TAPERED SKINNY JEANS",
            price: "2,490.00",
      },
      {
            id: "asxijkdy98i20-0ujhwjndcc",
            image: "https://static.zara.net/photos///2022/I/0/2/p/0840/350/406/2/w/183/0840350406_15_1_1.jpg?ts=1657725583238",
            title: "TAPERED SKINNY JEANS",
            price: "2,490.00",
      },
      {
            id: "qoid/wdoiqd923-23eiuj",
            image: "https://static.zara.net/photos///2022/I/0/2/p/0840/350/802/2/w/183/0840350802_15_1_1.jpg?ts=1657725612986",
            title: "TAPERED SKINNY JEANS",
            price: "2,490.00",
      },
      {
            id: "alkqwus932e=2doiwlkd",
            image: "https://static.zara.net/photos///2022/I/0/2/p/0840/350/822/2/w/183/0840350822_15_1_1.jpg?ts=1657725626971",
            title: "TAPERED SKINNY JEANS",
            price: "2,490.00",
      },
];

const jeans_data5 = [
      {
            id: "diukwd-092eiwkjdwd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/425/250/2/w/183/5575425250_15_1_1.jpg?ts=1657724106456",
            title: "SKINNY FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "sxkjdsoi23-02e0oikwjd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/6045/410/406/23/w/183/6045410406_15_1_1.jpg?ts=1657724231868",
            title: "SKINNY FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "dqwkjwdjlk0-23-02idehjncd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/425/822/2/w/183/5575425822_15_1_1.jpg?ts=1657724626494",
            title: "SKINNY FIT JEANS",
            price: "2,490.00",
      },
      {
            id: "pwidwjkd291382-3ejkwwd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/425/400/2/w/183/5575425400_15_1_1.jpg?ts=1657724340005",
            title: "SKINNY FIT JEANS",
            price: "2,490.00",
      },
      {
            id: "wdhwkjqopqkwjcas",
            image: "https://static.zara.net/photos///2022/I/0/1/p/5575/425/407/2/w/183/5575425407_15_1_1.jpg?ts=1657724511357",
            title: "SKINNY FIT JEANS",
            price: "2,490.00",
      },
];

const jeans_data6 = [
      {
            id: "2920383jd83",
            image: "https://static.zara.net/photos///2022/I/0/1/p/0840/380/407/2/w/183/0840380407_15_1_1.jpg?ts=1657730130548",
            title: "BAGGY FIT JEANS",
            price: "2,990.00",
      },
      {
            id: "skslw083930h83nd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/2553/321/800/2/w/183/2553321800_15_1_1.jpg?ts=1657730201496",
            title: "RELAXED FIT DENIM TROUSERS",
            price: "4,990.00",
      },
      {
            id: "10qsxlwmdd03048nd",
            image: "https://static.zara.net/photos///2022/I/0/1/p/0840/494/427/2/w/183/0840494427_15_1_1.jpg?ts=1658400494567",
            title: "RELAXED-FIT JEANS",
            price: "3,490.00",
      },
];

const JeansPage = () => {
      return (
            <>
            <Navbar/>
                  <div>
                        <JeansCategoryTopSection />
                        <ReusedJeansComponent
                              image1={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/000/752/2/w/373/0000000752_1_1_1.jpg?ts=1657654738729"
                              }
                              image2={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/001/317/2/w/373/0000001317_2_2_1.jpg?ts=1657812051816"
                              }
                              jeans_data={jeans_data}
                        />
                        <ReusedJeansComponent
                              image1={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/000/746/2/w/373/0000000746_15_1_1.jpg?ts=1657651055174"
                              }
                              image2={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/001/316/2/w/373/0000001316_2_2_1.jpg?ts=1657811839710"
                              }
                              jeans_data={jeans_data2}
                        />
                        <ReusedJeansComponent
                              image1={
                                    "https://static.zara.net/photos///2022/I/0/1/p/5575/440/400/3/w/563/5575440400_2_1_1.jpg?ts=1657555205031"
                              }
                              image2={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/001/324/2/w/373/0000001324_2_2_1.jpg?ts=1657812422940"
                              }
                              jeans_data={jeans_data3}
                        />
                        <ReusedJeansComponent
                              image1={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/000/740/2/w/373/0000000740_1_1_1.jpg?ts=1657652478765"
                              }
                              image2={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/001/323/2/w/373/0000001323_2_2_1.jpg?ts=1657812310905"
                              }
                              jeans_data={jeans_data4}
                        />
                        <ReusedJeansComponent
                              image1={
                                    "https://static.zara.net/photos///2022/I/M/2/p/0000/001/236/2/w/373/0000001236_13_1_1.jpg?ts=1657656915110"
                              }
                              image2={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/001/322/2/w/373/0000001322_2_2_1.jpg?ts=1657812243822"
                              }
                              jeans_data={jeans_data5}
                        />
                        <ReusedJeansComponent
                              image1={
                                    "https://static.zara.net/photos///2022/I/M/2/p/0000/000/750/2/w/373/0000000750_13_1_1.jpg?ts=1657656930379"
                              }
                              image2={
                                    "https://static.zara.net/photos///2022/I/M/1/p/0000/001/282/2/w/373/0000001282_2_2_1.jpg?ts=1657811706625"
                              }
                              jeans_data={jeans_data6}
                        />
                        <JeansBottomSection />
                  </div>
            </>
      );
};

export default JeansPage;
