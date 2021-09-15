import React from "react";

const Welcome = () => {
    const getStarted = () => {
        localStorage.setItem('welcome',true);
    }
  return (
    <div className="welcome-container">
      <h2>Welcome</h2>
      <button onClick={()=>{getStarted()}}>Get Started</button>
    </div>
  );
};

export default Welcome;
