import * as types from "./actionTypes"
import axios from "axios"

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

 export const getTshirtData=(dispatch)=>{
    dispatch(gettshirtRequest())
   
    return axios
    .get("https://62d7a8e551e6e8f06f1fd777.mockapi.io/T-SHIRTS")
    .then((r)=>dispatch(gettshirtSuccess(r.data)))
    .catch((e)=>dispatch(gettshirtFailure()))            
}