import React from "react";
import { useHistory } from "react-router";
const Nav = () => {
    const history = useHistory()
  return (
    <div className="nav-container">
      <div>
        <img src="../logo.png" />
      </div>
      <button style={{marginLeft:'35%'}} onClick={()=>{history.push('/add/user')}} className="btn btn-success">Add User</button>
    </div>
  );
};

export default Nav;
