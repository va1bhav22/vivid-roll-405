import React from 'react'
import {Link} from 'react-router-dom';

const ListCard = ({catagoryList,cardIndex}) => {
  return (
    <>
        {catagoryList[cardIndex].map((item)=>{
            return(
                <li key={item.title} className={`styles.${item.cName}`}>
                   <Link to={item.path}><span>{item.title}</span></Link> 
                </li>
            )
        })}
    </>
  )
}

export default ListCard