import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./CartProvider/cartReducer";


const rootReducer = combineReducers({
    cartReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
