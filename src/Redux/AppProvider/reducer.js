import * as types from "./actionTypes";
const initialState = {
  TShirt: [],
  isLoading: false,
  isError: false,
};

export const AppReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case types.GET_TSHIRT_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            };
        }
    

    case types.GET_TSHIRT_SUCCESS:{
        // console.log("getpayload")
        return{
            ...state,
            TShirt:payload,
            isLoading:false,
            isError:false
        };
    }
case types.GET_TSHIRT_FAILURE:{
    return{
        ...state,
        isLoading:false,
        isError:true,
    }
}
default:
    return state;
}
};
