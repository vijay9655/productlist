import { combineReducers } from 'redux';
import reducers from "./Reducer";
const RootReducer = combineReducers({ data: reducers })

export default RootReducer;
