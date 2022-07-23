import React, { useEffect, useState } from "react";
import styles from "../Styled/Description.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useParams , useNavigate } from "react-router";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { GET_UPDATED_ITEM_QUANTITY_FUNC } from "../Redux/CartProvider/action";
const Description = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const params = useParams();
      const [data, setData] = useState({
            image: [],
            title: "",
            price: 0,
            description: "",
            Quantity:1
      });
      useEffect(() => {
            axios.get(  
                  `https://62d7a8e551e6e8f06f1fd777.mockapi.io/${params.key}/${params.id}`
            )
                  .then((res) => setData(res.data))
                  .catch((error) => console.error(error));
      }, []);
      // console.log(data);
      // code for handling description to cart
      const { image, title, description, price } = data;
      const [toggle, setToggle] = useState(false);
      const handleBag = () => {
            setToggle(toggle ? false : true);
            const item = JSON.parse(localStorage.getItem("CartItem"))||[];
            item.push({...data,Quantity:1});
            dispatch(GET_UPDATED_ITEM_QUANTITY_FUNC(item))
            localStorage.setItem("CartItem", JSON.stringify(item));
      };
      // // local storage functionality pending
      const handleBucket = () => {
            navigate("/cart");
      };
      const settings = {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            vertical: true,
            arrows: false,
      };

      const img1 = image[0];
      const img2 = image[1];
      const img3 = image[2];
      const img4 = image[3];
      const img5 = image[4];

      // const productNmae = "GEOMETRIC JACQUARD JACKET";
      // const description =
      //   "Collared jacket with long sleeves. Welt pockets at the hip. Elastic trims. Zip-up front.";
      // const price = 6990;

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
                                          Care for fiber & water: at least 45%
                                          recycled cotton. We use the Join
                                          <br />
                                          Life label on clothing that is
                                          produced using technology and raw
                                          materials that help us to reduce the
                                          environmental impact of our products.{" "}
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div className={styles.descChm}>
                        {image.length !== 0 && (
                              <Slider {...settings}>
                                    <img src={img1} alt="" />
                                    <img src={img2} alt="" />
                                    <img src={img3} alt="" />
                                    <img src={img4} alt="" />
                                    <img src={img5} alt="" />
                              </Slider>
                        )}
                        {image.length === 0 && (
                              <div style={{ marginTop: "100px" }}>
                                    <Spinner
                                          thickness="4px"
                                          speed="0.65s"
                                          emptyColor="gray.200"
                                          color="blue.500"
                                          size="xl"
                                    />
                              </div>
                        )}
                  </div>
                  <div className={styles.descCh}>
                        {image.length !== 0 && (
                              <div className={styles.miniImg}>
                                    <img src={img1} alt="" />
                                    <img src={img2} alt="" />
                                    <img src={img3} alt="" />
                                    <img src={img4} alt="" />
                                    <img src={img5} alt="" />
                              </div>
                        )}

                        <div className={styles.pDetail}>
                              <h3>{title}</h3>
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
                              <button
                                    className={styles.cartbtn}
                                    onClick={handleBag}
                              >
                                    ADD TO BAG
                              </button>
                              <button
                                    className={
                                          toggle
                                                ? styles.cartbtn
                                                : styles.bucketbtn
                                    }
                                    onClick={handleBucket}
                              >
                                    GO TO BUCKET
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Description;
