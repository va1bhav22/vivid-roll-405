import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styled/sideMenu.module.css";
import { useDisclosure } from "@chakra-ui/react";
const ListCard = ({ catagoryList, cardIndex }) => {
      const { onClose } = useDisclosure();
      return (
            <>
                  {catagoryList[cardIndex].map((item) => {
                        console.log(item);
                        return (
                              <li
                                    key={item.title}
                                    className={item?.cName}
                                    onClose={onClose}
                              >
                                    <Link
                                          disable={item.disabled}
                                          to={item.path}
                                    >
                                          {item.title}
                                    </Link>
                              </li>
                        );
                  })}
            </>
      );
};

export default ListCard;
