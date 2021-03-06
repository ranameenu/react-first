import React, { Component } from 'react';
import Useritem from './Useritem';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends Component {
  state = { users: null };

  async componentDidMount() {
    const res = await axios.get('http://localhost:5000/users');
    this.setState({ users: res.data });
  }
  onDelete = (id) => {
    // delete from database
    axios.delete(`http://localhost:5000/users/${id}`);

    // delete from dom
    let copyUsers = this.state.users;
    copyUsers = copyUsers.filter((value) => value.id !== id);
    this.setState({ users: copyUsers });
  };

  render() {
    return (
      <div>
        <div className="row mt-2">
          <div className="col-6 mt-3 ">
            <h4>Users</h4>
          </div>
          <div className="col-6 mt-1">
            <Link to="/users/add">
              <button className="btn btn-success float-right">Add User</button>
            </Link>
          </div>
        </div>
        {this.state.users !== null ? (
          this.state.users.map((value, index) => (
            <Useritem key={value.id} value={value} onDelete={this.onDelete} />
          ))
        ) : (
          <h2>No users found</h2>
        )}
      </div>
    );
  }
}

export default Users;
