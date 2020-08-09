import React, { Component } from 'react';
import Link from 'react-router-dom';

class AddUser extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    designation: '',
  };
  render() {
    return (
      <div>
        <form className="w-50">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <input
            type="submit"
            value="Add User"
            className="btn btn-success mt-2"
          />
        </form>
      </div>
    );
  }
}

export default AddUser;
