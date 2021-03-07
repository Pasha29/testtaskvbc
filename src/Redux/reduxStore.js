import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import commonReducer from "./commonReducer";

let reducers = combineReducers({
    common: commonReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;