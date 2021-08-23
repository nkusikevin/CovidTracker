import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {allContinentsReducer,allCountriesReducer} from './reducers/dataReducer'
const reducer = combineReducers({
	allContinents: allContinentsReducer,
    countries:allCountriesReducer
});

const initialState = {
	//initial state of the whole app
}




const middleWare = [thunk];
//creating the store for the app and passing in the inital state and reducer
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;