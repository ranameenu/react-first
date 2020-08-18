import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Users from "./component/users/Users";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";
import Notfound from "./component/pages/Notfound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar icon="fas fa-home" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
