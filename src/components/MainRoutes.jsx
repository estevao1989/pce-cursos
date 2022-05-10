import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Panel from "./Panel";
import Playlist from "../courses/Playlist";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

export default (props) => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
        <Panel />
      </Route>
      <Route path="/curso/:nomedocurso/:id">
        {localStorage.getItem('isLoggedIn') ? <Playlist></Playlist> : <Redirect to="/" />}
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/reset">
        <Reset></Reset>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};
