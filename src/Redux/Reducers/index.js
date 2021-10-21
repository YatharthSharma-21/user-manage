import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import loadingReducer from "./loadingReducer";
import userReducer from "./UserReducer"

export default combineReducers({  
  alert: alertReducer,  
  loading: loadingReducer, 
  users: userReducer
});
