import { SET_MOVIES, SET_PAGE } from "../Constants/moviesTypes";

const initialState = {
  movies:[],
  page:0
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MOVIES:
      return {...state,movies:[...state.movies,...payload]};
      case SET_PAGE:
      return {...state,page:payload};    
    default:
      return state;
  }
};

export default moviesReducer;