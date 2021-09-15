import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({  
  alert: alertReducer,  
  loading: loadingReducer,  
});
