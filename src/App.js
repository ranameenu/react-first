import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const flag = false;
    return (
      <div>
        {2 === '2' ? <h1>hello react</h1> : <h1>calculation wrong</h1>}

        {flag == false ? <h1>false calculation</h1> : <h1>true statement</h1>}
      </div>
    );
  }
}

export default App;
