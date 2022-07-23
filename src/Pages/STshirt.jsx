import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {getTshirtData,getTracksuitData,getTrouserData,getSweatShirtData} from "../Redux/AppProvider/action"
import { useEffect } from 'react'
import SProductCard from '../Components/SProductCard'

//claver programmer
const STshirt = () => {
    const {TShirt,Tracksuit,Trouser,SweatShirt}=useSelector(state=>state.AppReducer)
    const dispatch=useDispatch();
//     console.log(TShirt);
// console.log(Tracksuit)
console.log(SweatShirt);

    useEffect(() => {
          
          dispatch(getTshirtData);
          dispatch(getTracksuitData);
          dispatch(getTrouserData);
           dispatch(getSweatShirtData);
      }, []);
      // console.log(Tshirt);

  return (
    <div  style={{backgroundColor:"black"}}>
      <div >
      <SProductCard data={TShirt} title = "T-SHIRTS"/>
       </div>
       <div >
      <SProductCard data={Tracksuit} title = "TRACKSUITS" />
       </div>

      <div >
      <SProductCard data={Trouser} title = "TROUSERS"/>
       </div>

       <div >
      <SProductCard data={SweatShirt} title = "SWEARTSHIRTS"/>
       </div>
    </div>
  )
}



export default STshirt