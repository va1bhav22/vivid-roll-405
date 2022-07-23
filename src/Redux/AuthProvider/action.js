import axios from 'axios';
import * as types from './actionTypes';

const register = (params)=>(dispatch)=>{
    dispatch({type : types.SIGNUP_REQUEST});
    return axios.post()
}