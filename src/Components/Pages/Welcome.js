import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Actions/userAction"
import { useHistory } from "react-router";

const Welcome = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { page } = useSelector((state) => state.movies);
    const getStarted = () => {
      dispatch(getUsers(page, history));
        localStorage.setItem('welcome',true);
    }
  return (
    <div className="welcome-container">
      <h2>Welcome</h2>
      <button href="/home" onClick={()=>{getStarted()}}>Get Started</button>
    </div>
  );
};

export default Welcome;
