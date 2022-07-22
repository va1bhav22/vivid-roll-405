import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {getTshirtData} from "../Redux/AppProvider/action"
import { useEffect } from 'react'
import styled from "styled-components"
import SProductCard from '../Components/SProductCard'


const STshirt = () => {
    const Tshirt=useSelector(state=>state.AppReducer.TShirt)
    const dispatch=useDispatch();
    // console.log(Tshirt);


    useEffect(() => {
        if (Tshirt?.length === 0) {
          
          dispatch(getTshirtData);
        }
      }, [dispatch, Tshirt?.length]);
      console.log(Tshirt);

  return (
    <div  style={{backgroundColor:"black"}}>
      <DataWrapper >
      {
        Tshirt?.length>0 && Tshirt.map(item=>{
          return (
            
               

                 <SProductCard key={item.id} {...item} />
              
               
        )
        })
      }
       </DataWrapper>
    </div>
  )
}


const DataWrapper=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
justify-content:space-around;
border:1px solid red;
color:white;
background-color:black;
width:80%;
margin:auto;
`;
export default STshirt