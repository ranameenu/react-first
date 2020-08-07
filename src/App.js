import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Users from './component/users/Users';
import Notfound from './component/pages/Notfound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar icon="fas fa-home" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
