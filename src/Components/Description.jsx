import React, { useState } from "react";
import styles from "../Styled/Description.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Description = () => {
    // code for handling description to cart
    const [toggle, setToggle] = useState(false)
    const handleBag=()=>{
          setToggle(toggle?false:true)
    }
    // local storage functionality pending
    const handleBucket=()=>{

    }
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    vertical: true,
    arrows: false,
  };

  const img1 =
    "https://static.zara.net/photos///2022/I/0/2/p/0706/303/330/2/w/750/0706303330_1_1_1.jpg?ts=1657879654082";
  const img2 =
    "https://static.zara.net/photos///2022/I/0/2/p/0706/303/330/2/w/750/0706303330_2_1_1.jpg?ts=1657879655439";
  const img3 =
    "https://static.zara.net/photos///2022/I/0/2/p/0706/303/330/2/w/750/0706303330_2_5_1.jpg?ts=1657879672790";
  const img4 =
    "https://static.zara.net/photos///2022/I/0/2/p/0706/303/330/2/w/750/0706303330_6_3_1.jpg?ts=1657813946601";
  const img5 =
    "https://static.zara.net/photos///contents/cm/sustainability/extrainfo/w/750/sustainability-extrainfo-label-1403_0.jpg?ts=1635870422916";

  const productNmae = "GEOMETRIC JACQUARD JACKET";
  const description =
    "Collared jacket with long sleeves. Welt pockets at the hip. Elastic trims. Zip-up front.";
  const price = 6990;

  return (
    <div className={styles.desc}>
      <div className={styles.descCh}>
        <div className={styles.extraDP}>
        <div className={styles.extraD}>

       
        <h3>MATERIALS, CARE AND ORIGIN</h3>
        <br />
        <h4>JOIN LIFE</h4>
        <br />
        <p>
          Care for fiber & water: at least 45% recycled cotton. We use the Join
          <br />
          Life label on clothing that is produced using technology and raw
          materials that help us to reduce the environmental impact of our
          products.{" "}
        </p>
        </div>
        </div>
      </div>
      <div className={styles.descChm}>
        <Slider {...settings}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </Slider>
      </div>
      <div className={styles.descCh}>
        <div className={styles.miniImg}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
        <div className={styles.pDetail}>
          <h3>{productNmae}</h3>
          <p>{description}</p>
          <p>MULTICOLORED | 0706/303</p>
          <p>₹ {price}</p>
          <div className={styles.pSize}>
            <select name="" id="">
              <option value="..">Size</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
            </select>
          </div>
          <button className={styles.cartbtn}
          onClick={handleBag}
          >ADD TO BAG</button>
          <button className={ toggle?styles.cartbtn:styles.bucketbtn}
          onClick={handleBucket}
          >ADD TO BUCKET</button>
        </div>
       
      </div>
    </div>
  );
};

export default Description;
