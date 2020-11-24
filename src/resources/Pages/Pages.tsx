import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../../global/components/Nav";
import Routes from "../../Routes";

const Pages = () => {
  return (
    <>
      <Nav />
      <Switch>
        {Routes.map((route, index) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Pages;
