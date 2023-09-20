import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Templates from "./components/Templates";
import Info from "./components/Info";
import Contacts from "./components/Contacts";

const index = () => {
  // console.log(window.location);
  // const query = URLSearchParams(window.location.search);
  // console.log(query.get("name"));
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/home"} />
          </Route>
          <Route path={"/home"} component={Navbar} />
          <Route path={"/templates"} component={Navbar} />
          <Route path={"/info"} component={Navbar} />
          <Route path={"/contacts"} component={Navbar} />
        </Switch>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/home"} component={Home} />
          <Route path={"/templates"} component={Templates} />
          <Route path={"/info"} component={Info} />
          <Route path={"/contacts"} component={Contacts} />
          <Route path={"*"}>
            <h1>Not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default index;
