import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import loadingReducer from "./loadingReducer";
import moviesReducer from "./moviesReducer"

export default combineReducers({  
  alert: alertReducer,  
  loading: loadingReducer, 
  movies: moviesReducer
});
