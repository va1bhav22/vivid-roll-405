import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import { reducer as authReducer } from './AuthProvider/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({authReducer})
export const store =  legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));