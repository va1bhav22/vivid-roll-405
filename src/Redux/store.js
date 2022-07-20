import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";

export const store = legacy_createStore(cartReducer,applyMiddleware(thunk))