import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-6 mt-3 ">
            <h3>USERS</h3>
          </div>
          <div className="col-6 mt-1">
            <button className="btn btn-success float-right">Add User</button>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h2>Name:Meenu</h2>
            <h4>Age:26</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
