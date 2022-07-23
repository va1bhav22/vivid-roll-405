import { applyMiddleware, combineReducers, legacy_createStore,compose} from "redux";
import thunk from "redux-thunk";
import {AppReducer} from "./AppProvider/reducer"
import { cartReducer } from "./CartProvider/cartReducer";
import {reducer as allDataReducer} from './AllDataProvider/reducer';
import {reducer as authReducer} from './AuthProvider/reducer'

const composeEnhancers= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose ;
const rootReducer = combineReducers({
    cartReducer,
    AppReducer,
    allDataReducer,
    authReducer
})
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))




