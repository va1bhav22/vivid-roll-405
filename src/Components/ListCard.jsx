import React from 'react'
import {Link} from 'react-router-dom';
import styles from '../Styled/sideMenu.module.css'
const ListCard = ({catagoryList,cardIndex}) => {
  return (
    <>
        {catagoryList[cardIndex].map((item)=>{
          console.log(item)
            return(
                <li key={item.title} className={item?.cName}>
                   <Link to={item.path}>{item.title}</Link> 
                </li>
            )
        })}
    </>
  )
}

export default ListCard