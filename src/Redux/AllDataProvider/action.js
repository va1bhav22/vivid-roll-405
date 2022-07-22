import axios from 'axios';
import * as types from './actionTypes'

export const getAllData = (url)=>(dispatch)=>{
        dispatch({type : types.GET_DATA_REQUEST});
        
        axios.get(url).then((r)=>dispatch({type : types.GET_DATA_SUCCESS,payload : r.data}))
        .catch((e)=>dispatch({type : types.GET_DATA_FALIURE}));
}