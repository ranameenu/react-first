import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';

class App extends Component {
  render() {
    const flag = false;
    return (
      <div>
        {flag == false ? <h1>false calculation</h1> : <h1>true statement</h1>}
        <Navbar />
      </div>
    );
  }
}

export default App;
