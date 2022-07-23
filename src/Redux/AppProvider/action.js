import * as types from "./actionTypes"
import axios from "axios"


//TSHIRT
 const gettshirtRequest=()=>({
    type:types.GET_TSHIRT_REQUEST,
 })

 const gettshirtSuccess=(payload)=>({
    type:types.GET_TSHIRT_SUCCESS,
    payload,
 })

 const gettshirtFailure=()=>({
    type:types.GET_TSHIRT_FAILURE,
 })

//TRACKSUIT
 const getTracksuitRequest=()=>({
   type:types.GET_TRACKSUIT_REQUEST,
})

const getTracksuitSuccess=(payload)=>({
   type:types.GET_TRACKSUIT_SUCCESS,
   payload,
})

const getTracksuitFailure=()=>({
   type:types.GET_TRACKSUIT_FAILURE,
})


//TROUSER
const getTrouserRequest=()=>({
   type:types.GET_TROUSER_REQUEST,
})

const getTrouserSuccess=(payload)=>({
   type:types.GET_TROUSER_SUCCESS,
   payload,
})

const getTrouserFailure=()=>({
   type:types.GET_TROUSER_FAILURE,
})

//SWEATSHIRT
const getSweatShirtRequest=()=>({
   type:types.GET_SWEATSHIRT_REQUEST,
})

const getSweatShirtSuccess=(payload)=>({
   type:types.GET_SWEATSHIRT_SUCCESS,
   payload,
})

const getSweatShirtFailure=()=>({
   type:types.GET_SWEATSHIRT_FAILURE,
})


//TSHIRT
 export const getTshirtData=()=>(dispatch)=>{
    dispatch(gettshirtRequest())
   console.log("Hello world")
    return axios
    .get("https://62d7a8e551e6e8f06f1fd777.mockapi.io/T-SHIRTS")
    .then((r)=>{
      console.log("data" ,r.data)
      dispatch(gettshirtSuccess(r.data))})
    .catch((e)=>dispatch(gettshirtFailure()))            
}

//TRACKSUIT
export const getTracksuitData=(params)=>(dispatch)=>{
   dispatch(getTracksuitRequest())
  
   return axios
   .get("https://62d7a8e551e6e8f06f1fd777.mockapi.io/TRACKSUITS",params)
   .then((r)=>dispatch(getTracksuitSuccess(r.data)))
   .catch((e)=>dispatch(getTracksuitFailure()))            
}

//TROUSER
export const getTrouserData=(params)=>(dispatch)=>{
   dispatch(getTrouserRequest())
  
   return axios
   .get("https://62d7a8e551e6e8f06f1fd777.mockapi.io/TROUSERS",params)
   .then((r)=>dispatch(getTrouserSuccess(r.data)))
   .catch((e)=>dispatch(getTrouserFailure()))            
}


//SWEATSHIRT
export const getSweatShirtData=(params)=>(dispatch)=>{
   dispatch(getSweatShirtRequest())
  
   return axios
   .get("https://62d7a8e551e6e8f06f1fd777.mockapi.io/SWEATSHIRTS",params)
   .then((r)=>dispatch(getSweatShirtSuccess(r.data)))
   .catch((e)=>dispatch(getSweatShirtFailure()))            
}