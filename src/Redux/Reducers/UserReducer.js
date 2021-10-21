import {
  SET_USER,
  SET_PAGE,
  DELETE_USER,
  ADD_USER,
} from "../Constants/UserTypes";

const initialState = {
  users: [],
  page: 0,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const users = [...state.users];

  switch (type) {
    case SET_USER:
      return { ...state, users: [...state.users, ...payload] };
    case SET_PAGE:
      return { ...state, page: payload };
    case DELETE_USER:
      users.splice(payload, 1);
      return { ...state, users };
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    default:
      return state;
  }
};

export default userReducer;
