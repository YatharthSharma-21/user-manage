import { startLoading, stopLoading } from "./loadingAction";
import { getList } from "../../services/user.service";
import { SET_USER, SET_PAGE, DELETE_USER, ADD_USER } from "../Constants/UserTypes";

const getUsers = (page, history) => async (dispatch, getState) => {
  dispatch(startLoading(getState().loading.count));

  try {
    let pageNo = page + 1;
    const { data } = await getList(pageNo);
    console.log("data", data.data);
    dispatch({ type: SET_USER, payload: data.data });
    dispatch({ type: SET_PAGE, payload: pageNo });
    dispatch(stopLoading(getState().loading.count));
    history.push(`/home`);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(stopLoading(getState().loading.count));
  }
};

const deleteUsers = (id, history) => async (dispatch, getState) => {
  dispatch(startLoading(getState().loading.count));

  try {
    dispatch({ type: DELETE_USER, payload: id });

    dispatch(stopLoading(getState().loading.count));
    // history.push(`/home`);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(stopLoading(getState().loading.count));
  }
};

const addUser = (formdata, history) => async (dispatch, getState) => {
  dispatch(startLoading(getState().loading.count));
console.log('data',formdata)
  try {
    dispatch({ type: ADD_USER, payload: formdata });

    dispatch(stopLoading(getState().loading.count));
    history.push(`/home`);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(stopLoading(getState().loading.count));
  }
};

export { getUsers, deleteUsers, addUser };
