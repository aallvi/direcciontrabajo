import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import LoginReducer from './reducers/login.reducers';

const RootReducer = combineReducers({
    login: LoginReducer,
   
})

export default createStore(RootReducer, applyMiddleware(thunk))