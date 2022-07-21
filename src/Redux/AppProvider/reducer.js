import * as types from "./actionTypes";
const initialState = {
  TShirt: [],
  Tracksuit:[],
  Trouser:[],
  SweatShirt:[],
  isLoading: false,
  isError: false,
};

export const AppReducer=(state=initialState,{type,payload})=>{
    switch(type){
        //TSHIRT--->
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


//TRACKSUITE--->
case types.GET_TRACKSUIT_REQUEST:{
    return{
        ...state,
        isLoading:true,
        isError:false,
    };
}


case types.GET_TRACKSUIT_SUCCESS:{
// console.log("getpayload")
return{
    ...state,
    Tracksuit:payload,
    isLoading:false,
    isError:false
};
}
case types.GET_TRACKSUIT_FAILURE:{
return{
...state,
isLoading:false,
isError:true,
}
}


//TROUSER
case types.GET_TROUSER_REQUEST:{
    return{
        ...state,
        isLoading:true,
        isError:false,
    };
}

case types.GET_TROUSER_SUCCESS:{
// console.log("getpayload")
return{
    ...state,
    Trouser:payload,
    isLoading:false,
    isError:false
};
}
case types.GET_TROUSER_FAILURE:{
return{
...state,
isLoading:false,
isError:true,
}
}
//SWEATSHIRT--->
case types.GET_SWEATSHIRT_REQUEST:{
    return{
        ...state,
        isLoading:true,
        isError:false,
    };
}

case types.GET_SWEATSHIRT_SUCCESS:{
// console.log("getpayload")
return{
    ...state,
    SweatShirt:payload,
    isLoading:false,
    isError:false
};
}
case types.GET_SWEATSHIRT_FAILURE:{
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
