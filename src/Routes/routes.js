import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";


import Nav from "../Components/Navbar/Nav";
import Welcome from '../Components/Pages/Welcome';
import Home from '../Components/Pages/Home';
import Details from '../Components/Pages/Details'
const welcome = localStorage.getItem('welcome');

//Higher Order Components
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Dashboard = ({ routes }) => {
  
  return (
    <div className="dashboard">
      <Nav />  
          <Switch>
            {routes.map((route, i) => {
              
              return <RouteWithSubRoutes key={i} {...route} />;
              
            })}
            
          </Switch>     
    </div>
  );
};


//Routing Logic

const ROUTES = [
  {
    path: "/",
    key: "welcome",
    component: Dashboard,
    routes: [
      {
        path: "/",
        exact: true,
        component: () => !welcome ? <Welcome /> : <Home />,        
      },      
      {
        path: "/home",
        exact: true,
        component: () => <Home />,
        icon: "fas fa-home",
        title: "Home",
      },
      {
        path: "/details/:id",
        exact: true,
        component: () => <Details />,
      },       
      ]
     
  }
];

export default ROUTES;
export { RouteWithSubRoutes };
