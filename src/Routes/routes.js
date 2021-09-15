import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";


import Nav from "../Components/Navbar/Nav";
import Welcome from '../Components/Pages/Welcome';
import Home from '../Components/Pages/Home';
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
              if(!route.render){
              return <RouteWithSubRoutes key={i} {...route} />;
              }
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
        component: () => <Welcome />,
        render : welcome,
      },
      {
        path: "/welcome",
        exact: true,
        component: () => <Welcome />,
        render : welcome,
      },
      {
        path: "/home",
        exact: true,
        component: () => <Home />,
        icon: "fas fa-home",
        title: "Home",
      }       
      ]
     
  }
];

export default ROUTES;
export { RouteWithSubRoutes };
