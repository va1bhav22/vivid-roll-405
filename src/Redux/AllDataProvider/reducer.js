import * as types from './actionTypes';
const initState = {
    isLoading : false,
    data : [],
    isError : false,
}

export const reducer = (state= initState, action)=>{
    const {type, payload} =  action;
    switch(type){
        case types.GET_DATA_REQUEST:{
                return {
                    ...state,
                    isLoading : true,
                }
        }
        case types.GET_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                data : [...state.data,...payload],

            }
        }
        case types.GET_DATA_FALIURE :{
            return {
                ...state,
                isLoading : false,
                data : [],
                isError : true
            }
        }
        default :{
            return state;
        }
    }
}