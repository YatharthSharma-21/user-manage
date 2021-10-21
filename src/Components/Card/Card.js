import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../../Redux/Actions/userAction.js";

const Card = ({ data, index }) => {
  const dispatch = useDispatch();  
  const deleteUser = (id) => {
    dispatch(deleteUsers(id));
  };
  return (
    <div className="card col-sm-3">
      <p>Id : {data.id} </p>
      <p>Name : {data.name} </p>
      <p>Email : {data.email}</p>
      <p>Status : {data.status}</p>
      <img
        src="../../delete.png"
        onClick={() => {
          deleteUser(index);
        }}
        className="delete"
        alt="Delete"
        title="Delete User"
      ></img>
    </div>
  );
};

export default Card;
