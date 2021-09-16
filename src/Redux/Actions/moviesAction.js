import { startLoading, stopLoading } from "./loadingAction";
import  { getList }  from "../../services/user.service";
import { SET_MOVIES, SET_PAGE } from "../Constants/moviesTypes";

const getMovies = (page, history) => async (dispatch, getState) => {
  dispatch(startLoading(getState().loading.count));

  try {
      let pageNo = page+1;
    const  {data}  = await getList(pageNo);
    console.log(page);
      dispatch({ type: SET_MOVIES, payload: data.results });
      dispatch({ type: SET_PAGE, payload: pageNo });
      dispatch(stopLoading(getState().loading.count));     
      history.push(`/home`);
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(err.response.data);

    if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    // dispatch({ type: CREATE_PARTNER_ERROR });
    dispatch(stopLoading(getState().loading.count));
  }
};

export {
    getMovies,
}
