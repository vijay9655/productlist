import { applyMiddleware, createStore } from 'redux';
import RootReducer from './Root-reducer';
import reduxThunk from 'redux-thunk';

const middleware = [reduxThunk];
const store = createStore(RootReducer, applyMiddleware(...middleware));

export default store;