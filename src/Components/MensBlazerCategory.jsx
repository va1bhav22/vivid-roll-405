// import './App.css';
import ProductFooter from "./ProductFooter";
import ItemPoster from "./ItemPoster";
import MensBlazerSection from "./MensBlazerSection";
import MensMidSection from "./MensMidSection";
import MensProductItem from "./MensProductItem";
import MensTopSection from "./MensTopSection";
import { SSideMenuFilter } from "./SSideMenuFilter";

function MensBlazerCategory() {
      const topsectionurls = {
            videourl: "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/football-fw22-x-speedportal-pre-launch-hp-mh-large-animated-d_ftws0t.mp4",
            image1: "https://static.zara.net/photos///2022/I/M/1/p/0000/000/915/2/w/1346/0000000915_15_2_1.jpg?ts=1657647926021",
            image2: "https://static.zara.net/photos///2022/I/M/1/p/0000/000/916/2/w/1346/0000000916_15_2_1.jpg?ts=1657636006887",
            image3: "https://static.zara.net/photos///2022/I/M/1/p/0000/001/032/2/w/877/0000001032_15_2_1.jpg?ts=1657733787561",
            big_image1:
                  "https://static.zara.net/photos///2022/I/M/1/p/0000/000/790/2/w/1346/0000000790_15_2_1.jpg?ts=1657736877787",
            big_image2:
                  "https://static.zara.net/photos///2022/I/M/2/p/0000/000/793/2/w/1346/0000000793_15_2_1.jpg?ts=1657736588757",
            img1: "https://static.zara.net/photos///2022/I/M/2/p/0000/000/795/2/w/673/0000000795_15_2_1.jpg?ts=1657736582606",
            img2: "https://static.zara.net/photos///2022/I/M/2/p/0000/000/799/2/w/673/0000000799_15_1_1.jpg?ts=1657621553015",
      };

      // const mensshorts = [
      //       {
      //             id: "21929283837443",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/3991/305/400/2/w/270/3991305400_1_1_1.jpg?ts=1657713772562",
      //             title: "RELAXED FIT CARGO TROUSERS",
      //             price: "4,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      //       {
      //             id: "1354326411234",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/6085/327/615/2/w/270/6085327615_1_1_1.jpg?ts=1657880307786",
      //             title: "PRINTED SHIRT X RHUIGI",
      //             price: "2,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      //       {
      //             id: "4109293737290139030",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/6688/304/406/2/w/270/6688304406_1_1_1.jpg?ts=1657885714871",
      //             title: "GRAFFITI DENIM BERMUDA SHORTS (id)",
      //             price: "2,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      //       {
      //             id: "41092937372901",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/6688/304/406/2/w/270/6688304406_2_3_1.jpg?ts=1657885713311",
      //             title: "GRAFFITI DENIM BERMUDA SHORTS",
      //             price: "2,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      // ];
      // localStorage.setItem("menShorts", JSON.stringify(mensshorts));

      // const whiteblazerdata = [
      //       {
      //             id: "11128380930201393022",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/9621/802/715/2/w/270/9621802715_1_1_1.jpg?ts=1657891576023",
      //             title: "SUIT BLAZER (id)",
      //             price: "8,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      //       {
      //             id: "111283809302010000",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/9621/802/715/2/w/270/9621802715_2_2_1.jpg?ts=1657891581445",
      //             title: "SUIT BLAZER (id)",
      //             price: "8,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      //       {
      //             id: "11128380930201",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/9621/803/715/2/w/270/9621803715_1_1_1.jpg?ts=1657891986323",
      //             title: "SUIT TROUSERS",
      //             price: "4,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      //       {
      //             id: "22228380930201",
      //             image: "https://static.zara.net/photos///2022/I/0/2/p/9621/803/715/2/w/270/9621803715_2_3_1.jpg?ts=1657891986834",
      //             title: "SUIT TROUSERS",
      //             price: "4,990.00",
      //             apikey: "MENS_BLAZERS",
      //       },
      // ];
      // localStorage.setItem("WhiteBlazer", JSON.stringify(whiteblazerdata));
      const info = JSON.parse(localStorage.getItem("WhiteBlazer"));
      const info1 = JSON.parse(localStorage.getItem("menShorts"));

      const data1 = JSON.parse(localStorage.getItem("Mens3ItemsList"));
      const data2 = JSON.parse(localStorage.getItem("Mens4ItemsList"));
      return (
            <div>
                  {/* <SSideMenuFilter /> */}
                  <div>
                        <MensTopSection topsectionurls={topsectionurls} />
                        <MensMidSection />
                        <MensProductItem data1={data1} data2={data2} />
                        <MensBlazerSection />
                        <ItemPoster
                              imageurl={
                                    "https://static.zara.net/photos///2022/I/0/2/p/9621/803/715/2/w/429/9621803715_2_4_1.jpg?ts=1657891986662"
                              }
                              title={"SUIT TROUSERS"}
                              price={"4,990.00"}
                        />
                        <MensProductItem data2={info} />
                        <ItemPoster
                              imageurl={
                                    "https://static.zara.net/photos///2022/I/0/1/p/7446/409/505/2/w/429/7446409505_2_1_1.jpg?ts=1656952029149"
                              }
                              price={"3,990.00"}
                              title={"TIE-DYE PRINT VEST"}
                        />
                        <MensProductItem data2={info1} />
                        <ProductFooter />
                  </div>
            </div>
      );
}

export default MensBlazerCategory;
